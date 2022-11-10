"use strict";
var tutorialPoint;
(function (tutorialPoint) {
    let invoiceApp;
    (function (invoiceApp) {
        class invoice {
            calculate(price) {
                return price * 40;
            }
        }
        invoiceApp.invoice = invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
//# sourceMappingURL=Invoice.js.map