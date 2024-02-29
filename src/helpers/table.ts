/**
 * Returns the row number in a table based on the page number, index, and page size.
 *
 * @param {number} pageNumber - the page number
 * @param {number} index - the index of the item on the page
 * @param {number} pageSize - the number of items per page
 * @return {number} the row number in the table
 */
export function countRowNumberTable(pageNumber: number, index: number, pageSize: number) {
  return pageNumber === 1 ? index + 1 : (pageNumber - 1) * pageSize + index + 1;
}

interface ResponseSorter {
  orderBy: string;
  orderByDirection: string;
}
/**
 * Returns a ResponseSorter object based on the given Sorter object.
 *
 * @param {Sorter} sorter - The Sorter object containing order and columnKey.
 * @return {ResponseSorter} The ResponseSorter object with orderBy and orderByDirection.
 */
export const sorterTableUtils = (sorter: any): ResponseSorter => {
  const { order, columnKey } = sorter;
  let orderType: string = '';
  if (order === 'descend') orderType = 'DESC';
  if (order === 'ascend') orderType = 'ASC';

  if (orderType === '') {
    return {
      orderBy: '',
      orderByDirection: ''
    };
  }

  return {
    orderBy: columnKey,
    orderByDirection: orderType
  };
};

/**
 * Checks if the table is a soft table based on the given sorter, orderObject, and payload.
 *
 * @param {any} sorter - the sorter object
 * @param {any} orderObject - the order object
 * @param {any} payload - the payload object
 * @return {boolean} true if the table is a soft table, false otherwise
 */
export const hasSoftTable = (sorter: any, orderObject: any, payload: any) => {
  if (
    !sorter.columnKey ||
    (orderObject.orderBy === payload.orderBy &&
      orderObject.orderByDirection === payload.orderByDirection)
  )
    return true;

  return false;
};
