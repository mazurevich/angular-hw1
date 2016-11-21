(function () {
    "use strict";

    angular.module('app')
        .provider('rankService', rankService);

    
    function rankService() {
        let _symbol = '*';
        let _rankThresholds = [100, 200, 500, 1000];
        return {
            configRankSymbol: function (symbol) {
                _symbol = symbol;
            },

            configRankThresholds: function (rankThresholds) {
                _rankThresholds = rankThresholds;
            },
            
            $get: function () {
                return {
                    getStars
                };

                function getStars(rank) {
                    return new Array(getRank(rank)).fill(_symbol).join('');
                }

                function getRank(rank) {
                    for (let i = _rankThresholds.length; i > 0; i--) {
                        if (rank >= _rankThresholds[i - 1])
                            return i + 1;
                    }
                    return 1;
                }
            }


        }
    }
    
})();