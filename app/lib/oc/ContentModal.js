angular.module('OrderCloud-ContentModal', []); 

angular.module('OrderCloud-ContentModal')
    .directive('contentmodal', contentmodal)
    .controller('ContentModalCtrl', ContentModalCtrl)
;

function contentmodal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'ContentModalCtrl'
    };
    return directive;

    function template() {
        return [
            '<ul class="nav navbar-nav" style="margin-left: -20px; margin-right: -10px;">',
            '<li class="tradeshow visible-lg" style="padding-top: 6px;">',
            '<a ng-click="open(500)">',
            '<span class="visible-lg"><i class="fa fa-table" style="font-size: 14px;"></i>{{\'Tradeshow\' | r | xlat}}</span>',
            '</a>',
            '</li>',
            '<ul>'
        ].join('');
    }
}

ContentModalCtrl.$inject = ['$scope', '$modal'];
function ContentModalCtrl($scope, $modal) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            size: size,
            template: contentmodalopen,
            controller: ContentModalOpenCtrl,
            resolve: {
                item: function () {
                    //pass a scope variable into the modal content. in this case we are providing line item as an example for product use
                    return $scope.LineItem;
                }
            }
        });

        function contentmodalopen() {
            return [
                '<style>',
                '.modal-header {background-color:#f5f5f5;border-bottom: 1px solid #ccc; min-height: 36px; padding: 2px;}',
                '.modal-header h3 { margin-top:0;}',
                '.modal-header h5 { font-size:1.16em; font-weight:bold; padding:5px 10px; text-shadow: 0 1px 0 #ffffff;}',
                '.modal-header a.close {margin:0;padding:0;position:absolute;top:8px;right:10px;font-size:1.5em;color:#000;}',
                '.modal-body {width:100%; margin:0 auto; padding:10px 25px;}',
                '</style>',
                '<div class="modal-header" class="col-xs-12 row pull-right">',
                //Optional title in top header
                '<h5 class="modal-title text-primary">Tradeshow Reservation</h5>',
                //Optional close (x) in top header
                '<a class="pull-right close" ng-click="close()">',
                '<i class="fa fa-times"></i>',
                '</a>',
                '</div>',
                '<div class="modal-body">',
                '<iframe src="https://my.kitbuilder.redsharkgroup.com/CARU/Home.aspx" style="height: 600px; width: 1030px; z-index:99; border: 2px solid black;"></iframe>',
                //'<h3>Heading</h3>',
                //content block 1
                //'<h4>Subheading</h4>',
                //'<p>',
                //'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
                //'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                //'</p>',
                //content block 2
                //'<h4>Subheading</h4>',
                //'<p>',
                //'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia nisl, et hendrerit enim consequat posuere. Etiam ut interdum nisl, in ultricies arcu. ' +
                //'In mattis ultrices velit, et tristique sem mattis nec. Nullam fermentum quis erat non dapibus. Aenean sodales est at aliquet bibendum. Suspendisse ultricies quam ' +
                //'nec blandit tincidunt. Phasellus viverra est sit amet tortor semper facilisis. Vivamus vitae ipsum lacus. Proin pharetra, tellus in efficitur blandit, tellus nisl ' +
                //'venenatis turpis, ut commodo sapien felis eget quam.',
                //'</p>',
                '</div>',
                //Optional footer
                //'<div class="modal-footer">',
                //'<div class="pull-left">',
                //'<a class="btn btn-default" ng-click="cancel()">Cancel</a>',
                //'</div>',
                //'<div class="pull-right">',
                //'<a target="_blank" class="btn btn-primary " ng-click="close()">Close</a>',
                //'</div>',
                //'</div>'
            ].join('');
        }

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    };

    var ContentModalOpenCtrl = ['$scope', '$modalInstance', '$modal', function($scope, $modalInstance, $modal, item) {

        $scope.item = item; // this is the item passed in from the ContentModalCtrl resolve

        $scope.close = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }];

}