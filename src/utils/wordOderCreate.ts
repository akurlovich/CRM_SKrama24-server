import * as fs from "fs";
import path from 'path';
import {
    AlignmentType,
    BorderStyle,
    HeadingLevel,
    Paragraph,
    patchDocument,
    PatchType,
    Table,
    TableCell,
    TableRow,
    TextDirection,
    TextRun,
    VerticalAlign,
    WidthType
} from "docx";
import { ICommonData, IWordOrderData } from "../types/IWordOrderData";

export const wordOderCreate = (data: IWordOrderData[], common: ICommonData) => {
  const font = "Times New Roman";
  const generateRows = (prices: IWordOrderData[]): TableRow[] =>
    prices.map(({ item, title, dimension, count, price, sum, vatRate, vatSum, totalSum}) =>
      new TableRow({
      children: [
        new TableCell({
            children: [new Paragraph(item.toString())],
            verticalAlign: VerticalAlign.CENTER,
            textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
            children: [new Paragraph(title)],
            verticalAlign: VerticalAlign.CENTER,
            textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: dimension,
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: count.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: price.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: sum.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: vatRate.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: vatSum.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
        new TableCell({
          children: [new Paragraph({
            text: totalSum.toString(),
            alignment: AlignmentType.CENTER
          })],
          verticalAlign: VerticalAlign.CENTER,
          textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
        }),
      ],
      }),
    );

  patchDocument(fs.readFileSync(__dirname + path.sep + '../' + `assets` + path.sep + `template.docx`), {
    patches: {
      orderID: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.orderNumber,
            bold: true,
            size: 36,
            font: font,
          })
        ],
      },
      orderDate: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.orderDate,
            bold: true,
            size: 36,
            font: font,
          })
        ],
      },
      customerName: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.companyTitle,
            // bold: true,
            size: 28,
            font: font,
          })
        ],
      },
      varSum: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.vatSum,
            bold: true,
            size: 24,
            font: font,
          })
        ],
      },
      totalSum: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.totalSum,
            bold: true,
            size: 24,
            font: font,
          })
        ],
      },
      varSumWords: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: common.vatSumWords,
            bold: true,
            size: 24,
            font: font,
          })
        ],
      },
      totalSumWords: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
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
        type: PatchType.DOCUMENT,
        children: [
          new Table({
            width: {
                size: 9070,
                type: WidthType.AUTO,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "№",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Наименование товара",
                                      bold: true,
                                      size: 20,
                                      font,
                                      
                                  }),
                              ],
                              // text: 'HI all',
                              // leftTabStop: 0,
                              // indent: {left: convertInchesToTwip(0.0)},
                              // // spacing: { line: 240 },
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // margins: {left: 0},
                      // textDirection: TextDirection.LEFT_TO_RIGHT_TOP_TO_BOTTOM,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Ед.изм.",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Кол-во",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Цена, руб",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Сумма, руб",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Ставка НДС, %",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Сумма НДС, руб",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: "Всего с НДС, руб",
                                      bold: true,
                                      size: 20,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                ],
              }),
              ...generateRows(data),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph('')],
                    borders: {
                      bottom: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      left: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      right: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                    },
                  }),
                  new TableCell({
                    children: [new Paragraph('')],
                    borders: {
                      bottom: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      left: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      right: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                    },
                  }),
                  new TableCell({
                    children: [new Paragraph('')],
                    borders: {
                      bottom: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      left: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      right: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                    },
                  }),
                  new TableCell({
                    children: [new Paragraph('')],
                    borders: {
                      bottom: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                      left: {
                        style: BorderStyle.NONE,
                        color: 'FFFFFF'
                      },
                    },
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [
                          new TextRun({
                            text: "ИТОГО:",
                            bold: true,
                            size: 24,
                            font,
                          }),
                        ],
                        alignment: AlignmentType.RIGHT,
                      }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [
                          new TextRun({
                              text: common.sum,
                              bold: true,
                              size: 24,
                              font,
                          }),
                        ],
                          alignment: AlignmentType.CENTER,
                      }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                    // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                    children: [new Paragraph('')],
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: common.vatSum,
                                      bold: true,
                                      size: 24,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                  new TableCell({
                      children: [
                          new Paragraph({
                              heading: HeadingLevel.HEADING_2,
                              children: [
                                  new TextRun({
                                      text: common.totalSum,
                                      bold: true,
                                      size: 24,
                                      font,
                                  }),
                              ],
                              alignment: AlignmentType.CENTER,
                          }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      // textDirection: TextDirection.TOP_TO_BOTTOM_RIGHT_TO_LEFT,
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    },
  }).then((doc) => {
    // console.log(path.resolve(__dirname, '../..', 'static', '.jpeg'))
    fs.writeFileSync(path.resolve(__dirname, '../..', 'static', `${data[0].orderID}.docx`), doc);
    // fs.writeFileSync(__dirname + path.sep + `${data[0].orderID}MyDoc-11111.docx`, doc);
  });

};
