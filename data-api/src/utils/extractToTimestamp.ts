export default function extractToTimestamp(etag: string): number {
    const datetimeString = decodeURIComponent(etag.split("'")[1]);
    const date = new Date(datetimeString);
    return date.getTime();
}