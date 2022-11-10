var tutorialPoint;
(function (tutorialPoint) {
    var invoiceApp;
    (function (invoiceApp) {
        var invoice = /** @class */ (function () {
            function invoice() {
            }
            invoice.prototype.calculate = function (price) {
                return price * 40;
            };
            return invoice;
        }());
        invoiceApp.invoice = invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path="./Invoice.ts"/>
var invoice1 = new tutorialPoint.invoiceApp.invoice();
console.log(invoice1.calculate(40));
