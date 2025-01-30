import { IOrderBillType } from "../types/IOrder";

export const fileNameUpdate = (type: IOrderBillType, orderNumber: number, fileLength: number) => {
	switch (type) {
		case 'invoice':
			return 'Счёт_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
		case 'retail':
			return 'Счёт_Розница_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
		case 'check':
			return 'Товарный_чек_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
	
		default:
			break;
	}
}