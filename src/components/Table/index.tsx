import { Col, Row, Skeleton, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { TableRowSelection } from 'antd/lib/table/interface';
import React from 'react';
import styled from 'styled-components';

// models
import { IDataTable } from 'src/models/table.types';

// utils
import { LoadingTypes } from 'src/models/store.types';

// constants
import { PAGE_SIZE_OPTIONS } from 'src/constants/table';
import { countRowNumberTable, hasSoftTable, sorterTableUtils } from 'src/helpers/table';

interface VTableProps {
  children?: React.ReactNode;
  onChangePageSize: (currentPage: number, pageSize: number) => void;
  columns?: any[];
  dataTable: IDataTable<any>;
  handleTableChange: (sorter: any) => void;
  loadingType: LoadingTypes;
  hasLoading?: boolean;
  pagination?: any;
  rowSelection?: TableRowSelection<any>;
  fixedIndex?: boolean | 'left';
  showIndex?: boolean;
  showPagination?: boolean;
  yAxis?: string;
}

const TableBase: React.FC<VTableProps & Record<string, any>> = ({
  children,
  columns,
  onChangePageSize,
  dataTable,
  handleTableChange,
  hasLoading = false,
  loadingType,
  rowSelection,
  pagination,
  fixedIndex = false,
  showIndex = true,
  showPagination = true,
  yAxis = '80vh',
  ...rest
}) => {
  const { data, pageSize, currentPage, totalAlt, orderBy = '', orderByDirection = '' } = dataTable;
  const hasLoadingType = loadingType === LoadingTypes.GET;

  const getPagination = (pagination: any) => {
    if (!showPagination) {
      return false;
    }
    return pagination
      ? pagination
      : {
          defaultPageSize: 10,
          pageSize: pageSize,
          current: currentPage,
          total: totalAlt || data.filter((item: any) => item.no !== null).length, // Only accept items with no !== null
          showSizeChanger: true,
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          locale: { items_per_page: '' },
          onChange: (pIndex: any, pSize: any) => {
            //setSettingsByKey('pageSize', pSize.toString());
            onChangePageSize(pIndex, pSize);
          },
          showTotal: (total: any, range: any) => {
            return (
              <>
                Hiển thị {range[0]} - {range[1]} / Tổng số {total}
              </>
            );
          }
        };
  };

  return (
    <>
      {hasLoadingType && (
        <>
          <WrapperSkeleton>
            <Col span={24}>
              <Skeleton.Button active block size="default" />
            </Col>
            <Col span={24}>
              <Skeleton active />
              <Skeleton active />
            </Col>
            <Col span={12} offset={12}>
              <Skeleton.Input size="small" block active />
            </Col>
          </WrapperSkeleton>
        </>
      )}

      {!hasLoadingType && (
        <TableWrapper
          scroll={{
            x: '100%',
            y: yAxis
          }}
          rowSelection={rowSelection}
          loading={hasLoading}
          dataSource={hasLoading ? [] : data}
          columns={columns}
          pagination={getPagination(pagination)}
          onChange={(_page, _filter, sorter) => {
            const orderObject = sorterTableUtils(sorter);
            if (hasSoftTable(sorter, orderObject, { orderBy, orderByDirection })) {
              return;
            }
            handleTableChange(orderObject);
          }}
          showSorterTooltip={false}
          locale={{
            emptyText: 'Không có dữ liệu'
          }}
          {...rest}>
          {showIndex && (
            <Column
              title="STT"
              dataIndex="no"
              key="no"
              width={90}
              align="center"
              fixed={fixedIndex}
              render={(_el, _rc, ps) => {
                return countRowNumberTable(currentPage, ps, pageSize);
              }}
            />
          )}
          {children}
        </TableWrapper>
      )}
    </>
  );
};

const WrapperSkeleton = styled(Row)``;

const TableWrapper = styled(Table)``;

export default TableBase;
