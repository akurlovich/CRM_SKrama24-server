"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordOderCreate = void 0;
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var docx_1 = require("docx");
var wordOderCreate = function (data, common, filename) {
    var font = "Times New Roman";
    var generateRows = function (prices) {
        return prices.map(function (_a) {
            var item = _a.item, title = _a.title, dimension = _a.dimension, count = _a.count, price = _a.price, sum = _a.sum, vatRate = _a.vatRate, vatSum = _a.vatSum, totalSum = _a.totalSum;
            return new docx_1.TableRow({
                children: [
                    new docx_1.TableCell({
                        children: [
                            // new Paragraph(item.toString())
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: item.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: title,
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: dimension,
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: count.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: price.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: sum.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: vatRate.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: vatSum.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                    new docx_1.TableCell({
                        children: [
                            new docx_1.Paragraph({
                                children: [
                                    new docx_1.TextRun({
                                        text: totalSum.toString(),
                                        size: 20,
                                        font: font,
                                    }),
                                ],
                                alignment: docx_1.AlignmentType.CENTER
                            })
                        ],
                        verticalAlign: docx_1.VerticalAlign.CENTER,
                        textDirection: docx_1.TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                    }),
                ],
            });
        });
    };
    // patchDocument(fs.readFileSync(__dirname + path.sep + '../..' `assets` + path.sep + `template.docx`), {
    (0, docx_1.patchDocument)(fs.readFileSync(__dirname + path_1.default.sep + "template.docx"), {
        patches: {
            orderID: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.orderNumber,
                        bold: true,
                        size: 36,
                        font: font,
                    })
                ],
            },
            orderDate: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.orderDate,
                        bold: true,
                        size: 36,
                        font: font,
                    })
                ],
            },
            customerName: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.companyTitle,
                        // bold: true,
                        size: 28,
                        font: font,
                    })
                ],
            },
            varSum: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.vatSum,
                        bold: true,
                        size: 24,
                        font: font,
                    })
                ],
            },
            totalSum: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.totalSum,
                        bold: true,
                        size: 24,
                        font: font,
                    })
                ],
            },
            varSumWords: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.vatSumWords,
                        bold: true,
                        size: 24,
                        font: font,
                    })
                ],
            },
            totalSumWords: {
                type: docx_1.PatchType.PARAGRAPH,
                children: [
                    new docx_1.TextRun({
                        text: common.totalSumWords,
                        bold: true,
                        size: 24,
                        font: font,
                    })
                ],
            },
            // paragraph_replace: {
            //     type: PatchType.DOCUMENT,
            //     children: [
            //         new Paragraph("Lorem ipsum paragraph"),
            //         new Paragraph("Another paragraph"),
            //         new Paragraph({
            //             children: [
            //                 new TextRun("This is a "),
            //                 new ExternalHyperlink({
            //                     children: [
            //                         new TextRun({
            //                             text: "Google Link",
            //                         }),
            //                     ],
            //                     link: "https://www.google.co.uk",
            //                 }),
            //                 new ImageRun({ data: fs.readFileSync(__dirname + `\\assets\\image1.jpeg`), transformation: { width: 100, height: 100 } }),
            //             ],
            //         }),
            //     ],
            // },
            // header_adjective: {
            //     type: PatchType.PARAGRAPH,
            //     children: [new TextRun("Delightful Header")],
            // },
            // footer_text: {
            //     type: PatchType.PARAGRAPH,
            //     children: [
            //         new TextRun("replaced just as"),
            //         new TextRun(" well"),
            //         new ExternalHyperlink({
            //             children: [
            //                 new TextRun({
            //                     text: "BBC News Link",
            //                 }),
            //             ],
            //             link: "https://www.bbc.co.uk/news",
            //         }),
            //     ],
            // },
            // image_test: {
            //     type: PatchType.PARAGRAPH,
            //     children: [new ImageRun({ data: fs.readFileSync(__dirname + `\\assets\\image1.jpeg`), transformation: { width: 100, height: 100 } })],
            // },
            table: {
                type: docx_1.PatchType.DOCUMENT,
                children: [
                    new docx_1.Table({
                        width: {
                            size: 9070,
                            type: docx_1.WidthType.AUTO,
                        },
                        rows: __spreadArray(__spreadArray([
                            new docx_1.TableRow({
                                children: [
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "№",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Наименование товара",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                // text: 'HI all',
                                                // leftTabStop: 0,
                                                // indent: {left: convertInchesToTwip(0.0)},
                                                // // spacing: { line: 240 },
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // margins: {left: 0},
                                        // textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Ед.изм.",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Кол-во",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Цена, руб",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Сумма, руб",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Ставка НДС, %",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Сумма НДС, руб",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "Всего с НДС, руб",
                                                        bold: true,
                                                        size: 20,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                ],
                            })
                        ], generateRows(data), true), [
                            new docx_1.TableRow({
                                children: [
                                    new docx_1.TableCell({
                                        children: [new docx_1.Paragraph('')],
                                        borders: {
                                            bottom: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            left: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            right: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                        },
                                    }),
                                    new docx_1.TableCell({
                                        children: [new docx_1.Paragraph('')],
                                        borders: {
                                            bottom: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            left: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            right: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                        },
                                    }),
                                    new docx_1.TableCell({
                                        children: [new docx_1.Paragraph('')],
                                        borders: {
                                            bottom: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            left: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            right: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                        },
                                    }),
                                    new docx_1.TableCell({
                                        children: [new docx_1.Paragraph('')],
                                        borders: {
                                            bottom: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                            left: {
                                                style: docx_1.BorderStyle.NONE,
                                                color: 'FFFFFF'
                                            },
                                        },
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: "ИТОГО:",
                                                        bold: true,
                                                        size: 24,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.RIGHT,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: common.sum,
                                                        bold: true,
                                                        size: 24,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [new docx_1.Paragraph('')],
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: common.vatSum,
                                                        bold: true,
                                                        size: 24,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                    new docx_1.TableCell({
                                        children: [
                                            new docx_1.Paragraph({
                                                heading: docx_1.HeadingLevel.HEADING_2,
                                                children: [
                                                    new docx_1.TextRun({
                                                        text: common.totalSum,
                                                        bold: true,
                                                        size: 24,
                                                        font: font,
                                                    }),
                                                ],
                                                alignment: docx_1.AlignmentType.CENTER,
                                            }),
                                        ],
                                        verticalAlign: docx_1.VerticalAlign.CENTER,
                                        // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                                    }),
                                ],
                            }),
                        ], false),
                    }),
                ],
            },
        },
    }).then(function (doc) {
        console.log(path_1.default.resolve(__dirname, '../..', 'static', '.jpeg'));
        fs.writeFileSync(path_1.default.resolve(__dirname, '../..', 'static', "".concat(filename)), doc);
        // fs.writeFileSync(__dirname + path.sep + `${data[0].orderID}MyDoc-11111.docx`, doc);
    });
};
exports.wordOderCreate = wordOderCreate;
