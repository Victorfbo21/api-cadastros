import { format } from 'date-fns';

function formatarData(data: Date): string {
    const dataObj = new Date(data);
    return format(dataObj, 'dd/MM/yyyy HH:mm:ss');
}

export default formatarData;