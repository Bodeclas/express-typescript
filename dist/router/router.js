"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = require("path");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'www', 'index.html'));
});
exports.default = router;
//# sourceMappingURL=router.js.map