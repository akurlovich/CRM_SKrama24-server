import { IOrderBillType } from "../types/IOrder";

export const fileNameCreate = (type: IOrderBillType, count: number) => {
	switch (type) {
		case 'invoice':
			return 'Счёт_СКРАМ-Материалы_' + (count + 1) + '.docx';
		case 'retail':
			return 'Счёт_Розница_СКРАМ-Материалы_' + (count + 1) + '.docx';
		case 'check':
			return 'Товарный_чек_СКРАМ-Материалы_' + (count + 1) + '.docx';
	
		default:
			break;
	}
}