'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          isNextPageAvailable = resolvedState.isNextPageAvailable,
          hideTotalPageCount = resolvedState.hideTotalPageCount,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = void 0;
      if (hideTotalPageCount) {
        canNext = isNextPageAvailable;
      } else {
        canNext = page + 1 < pages;
      }

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiaXNOZXh0UGFnZUF2YWlsYWJsZSIsImhpZGVUb3RhbFBhZ2VDb3VudCIsIlRhYmxlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyR3JvdXBDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInN0YXJ0Um93IiwiZW5kUm93IiwicGFnZVJvd3MiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd01pbldpZHRoIiwic3VtIiwicmVzaXplZENvbHVtbiIsImZpbmQiLCJ4IiwiaWQiLCJnZXRGaXJzdERlZmluZWQiLCJ2YWx1ZSIsIndpZHRoIiwibWluV2lkdGgiLCJyb3dJbmRleCIsImZpbmFsU3RhdGUiLCJyb290UHJvcHMiLCJzcGxpdFByb3BzIiwidW5kZWZpbmVkIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsInJlc2l6ZXJQcm9wcyIsIm1ha2VIZWFkZXJHcm91cCIsImNvbHVtbiIsInJlc2l6ZWRWYWx1ZSIsImNvbCIsImZsZXgiLCJjb2x1bW5zIiwibWF4V2lkdGgiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJjbGFzc2VzIiwiaGVhZGVyQ2xhc3NOYW1lIiwic3R5bGVzIiwiaGVhZGVyU3R5bGUiLCJyZXN0IiwiZmxleFN0eWxlcyIsImFzUHgiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInRoZWFkR3JvdXBUclByb3BzIiwibWFrZUhlYWRlciIsInJlc2l6ZWRDb2wiLCJzb3J0Iiwic2hvdyIsInRoZWFkVGhQcm9wcyIsImlzUmVzaXphYmxlIiwicmVzaXplciIsImUiLCJpc1NvcnRhYmxlIiwiZGVzYyIsImluY2x1ZGVzIiwic2hpZnRLZXkiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlRmlsdGVyIiwidGhlYWRGaWx0ZXJUaFByb3BzIiwiZmlsdGVyIiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJHcm91cFByb3BzIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwidXNlT25FeHBhbmRlckNsaWNrIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsImluZGV4T2YiLCJyZXNvbHZlZE9uRXhwYW5kZXJDbGljayIsImludGVyYWN0aW9uUHJvcHMiLCJvbkNsaWNrIiwibWFrZVBhZENvbHVtbiIsIm1ha2VQYWRSb3ciLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwibWFrZVRhYmxlIiwicGFnaW5hdGlvbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUxBOzs7QUFPTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBSW5CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFDQSxVQUFLSyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JMLElBQXBCLE9BQXRCO0FBQ0EsVUFBS00sVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTixJQUFoQixPQUFsQjtBQUNBLFVBQUtPLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjUCxJQUFkLE9BQWhCO0FBQ0EsVUFBS1EsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCUixJQUFoQixPQUFsQjtBQUNBLFVBQUtTLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQlQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLVSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQlYsSUFBdEIsT0FBeEI7QUFDQSxVQUFLVyxV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RSxrQkFBbEIsR0FBdUMsSUFSMUM7QUFTR2UseUJBVEg7QUFVR3RFLHlCQUFhZ0YsYUFBYixHQUE2QixJQVZoQztBQVdFO0FBQUMsNEJBQUQ7QUFBQTtBQUNFLDJCQUFXLDBCQUFXakQsV0FBV3BILFNBQXRCLENBRGI7QUFFRSxvQ0FDS29ILFdBQVduSCxLQURoQjtBQUVFNEcsNEJBQWFULFdBQWI7QUFGRjtBQUZGLGlCQU1NZ0IsV0FBV2tCLElBTmpCO0FBUUc3RCx1QkFBU2lCLEdBQVQsQ0FBYSxVQUFDUCxDQUFELEVBQUlTLENBQUo7QUFBQSx1QkFBVTRFLFlBQVlyRixDQUFaLEVBQWVTLENBQWYsQ0FBVjtBQUFBLGVBQWIsQ0FSSDtBQVNHaEIsc0JBQVFjLEdBQVIsQ0FBWTJILFVBQVo7QUFUSCxhQVhGO0FBc0JHcEksOEJBQWtCeUksbUJBQWxCLEdBQXdDO0FBdEIzQyxXQWJGO0FBcUNHbE0sNEJBQWtCRSxvQkFBbEIsR0FDRztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0NzTTtBQURELFdBREgsR0FJRyxJQXpDTjtBQTBDRyxXQUFDdkosU0FBU08sTUFBVixJQUNDO0FBQUMsMkJBQUQ7QUFBcUJzQyx1QkFBckI7QUFDRyw0QkFBRW1CLGtCQUFGLENBQXFCNUcsVUFBckI7QUFESCxXQTNDSjtBQThDRSx3Q0FBQyxnQkFBRDtBQUNFLHFCQUFTYSxPQURYO0FBRUUseUJBQWFkO0FBRmYsYUFHTXlGLFlBSE47QUE5Q0YsU0FERjtBQXNERCxPQXhERDs7QUEwREE7QUFDQSxhQUFPdEgsV0FBV0EsU0FBU2dILFVBQVQsRUFBcUJnSCxTQUFyQixFQUFnQyxJQUFoQyxDQUFYLEdBQW1EQSxXQUExRDtBQUNEOzs7O0VBLytCcUMsdUJBQVEsMENBQVIsQzs7QUFBbkJsUSxVLENBQ1pvUSxTO0FBRFlwUSxVLENBRVpxUSxZO2tCQUZZclEsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3BUeXBlcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gcHJvcFR5cGVzXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZFByb3BzLFxuICAgICAgZ2V0VGhlYWRUclByb3BzLFxuICAgICAgZ2V0VGhlYWRUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyxcbiAgICAgIGdldFRib2R5UHJvcHMsXG4gICAgICBnZXRUckdyb3VwUHJvcHMsXG4gICAgICBnZXRUclByb3BzLFxuICAgICAgZ2V0VGRQcm9wcyxcbiAgICAgIGdldFRmb290UHJvcHMsXG4gICAgICBnZXRUZm9vdFRyUHJvcHMsXG4gICAgICBnZXRUZm9vdFRkUHJvcHMsXG4gICAgICBnZXRQYWdpbmF0aW9uUHJvcHMsXG4gICAgICBnZXRMb2FkaW5nUHJvcHMsXG4gICAgICBnZXROb0RhdGFQcm9wcyxcbiAgICAgIGdldFJlc2l6ZXJQcm9wcyxcbiAgICAgIHNob3dQYWdpbmF0aW9uLFxuICAgICAgc2hvd1BhZ2luYXRpb25Ub3AsXG4gICAgICBzaG93UGFnaW5hdGlvbkJvdHRvbSxcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgbXVsdGlTb3J0LFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgaXNOZXh0UGFnZUF2YWlsYWJsZSxcbiAgICAgIGhpZGVUb3RhbFBhZ2VDb3VudCxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyR3JvdXBDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiAoW1xuICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICBpbmRleCArPSAxXG4gICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgLi4ucm93LFxuICAgICAgICAgIF92aWV3SW5kZXg6IGluZGV4LFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXG4gICAgICAgIGlmIChyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldICYmIF8uZ2V0KGV4cGFuZGVkLCBuZXdQYXRoKSkge1xuICAgICAgICAgIFtyb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLCBpbmRleF0gPSByZWN1cnNlUm93c1ZpZXdJbmRleChcbiAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICB9KSxcbiAgICAgIGluZGV4LFxuICAgIF0pXG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBsZXQgY2FuTmV4dDtcbiAgICBpZiAoaGlkZVRvdGFsUGFnZUNvdW50KSB7XG4gICAgICBjYW5OZXh0ID0gaXNOZXh0UGFnZUF2YWlsYWJsZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG4gICAgfVxuXG5cbiAgICBjb25zdCByb3dNaW5XaWR0aCA9IF8uc3VtKFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVkQ29sdW1uID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gZC5pZCkgfHwge31cbiAgICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2x1bW4udmFsdWUsIGQud2lkdGgsIGQubWluV2lkdGgpXG4gICAgICB9KSxcbiAgICApXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZFZhbHVlID0gY29sID0+XG4gICAgICAgIChyZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2wuaWQpIHx8IHt9KS52YWx1ZVxuICAgICAgY29uc3QgZmxleCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoXG4gICAgICAgICAgY29sID0+IChjb2wud2lkdGggfHwgcmVzaXplZFZhbHVlKGNvbCkgPyAwIDogY29sLm1pbldpZHRoKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT5cbiAgICAgICAgICBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWluV2lkdGgpLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PlxuICAgICAgICAgIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5tYXhXaWR0aCksXG4gICAgICAgICksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRHcm91cFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZsZXhTdHlsZXMgPSB7XG4gICAgICAgIGZsZXg6IGAke2ZsZXh9IDAgYXV0b2AsXG4gICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgLi4uZmxleFN0eWxlcyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRHcm91cFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGVcbiAgICAgICAgPyAoPFJlc2l6ZXJDb21wb25lbnRcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgZmFsc2UpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbHVtbiwgdHJ1ZSl9XG4gICAgICAgICAgey4uLnJlc2l6ZXJQcm9wc31cbiAgICAgICAgLz4pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgc29ydCA/IChzb3J0LmRlc2MgPyAnLXNvcnQtZGVzYycgOiAnLXNvcnQtYXNjJykgOiAnJyxcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICBwaXZvdEJ5ICYmXG4gICAgICAgICAgICAgIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCkgJiZcbiAgICAgICAgICAgICAgJ3J0LWhlYWRlci1waXZvdCcsXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTb3J0YWJsZSkgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgbXVsdGlTb3J0ID8gZS5zaGlmdEtleSA6IGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhpc1Jlc2l6YWJsZSAmJiAncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jyl9PlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICBjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgICAgZmlsdGVyYWJsZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRmlsdGVyYWJsZVxuICAgICAgICAgICAgPyBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXIsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkRmlsdGVyUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6IHJvd0luZGV4ICs9IDEsXG4gICAgICAgIHBhZ2VTaXplLFxuICAgICAgICBwYWdlLFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICAgICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICAgICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKSxcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgICAgbGV0IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNvbHVtbi5DZWxsLFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgICAocHJvcHMgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICB1c2VPbkV4cGFuZGVyQ2xpY2sgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCAmJiAhY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZE9uRXhwYW5kZXJDbGljayA9IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICAgID8gb25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgICAgOiAoKSA9PiB7fVxuXG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBvbkNsaWNrIGV2ZW50cywgbWFrZSBzdXJlIHRoZXkgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gb3ZlcnJpZGUgZWFjaG90aGVyLiBUaGlzIHNob3VsZCBtYXliZSBiZSBleHBhbmRlZCB0byBoYW5kbGUgYWxsXG4gICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0ZFByb3BzLnJlc3Qub25DbGljaykge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMub25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGRQcm9wcy5yZXN0Lm9uQ2xpY2soZSwgKCkgPT4gcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2soZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNvbHVtblByb3BzLnJlc3Qub25DbGljaykge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMub25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgY29sdW1uUHJvcHMucmVzdC5vbkNsaWNrKGUsICgpID0+IHJlc29sdmVkT25FeHBhbmRlckNsaWNrKGUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtpMn0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgICAge3Jvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgICAgbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aCksXG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtTdWJDb21wb25lbnQgJiZcbiAgICAgICAgICAgICFyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIFN1YkNvbXBvbmVudChyb3dJbmZvKX1cbiAgICAgICAgPC9Uckdyb3VwQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBmbGV4ID0gd2lkdGhcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICdoaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KFBhZFJvd0NvbXBvbmVudCl9XG4gICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhcbiAgICAgICAgZmluYWxTdGF0ZSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMsXG4gICAgICApXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17aX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlIHx8IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9Uckdyb3VwQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udEZvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udEZvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEZvb3RUclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17dEZvb3RUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRGb290VHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUNvbHVtbkZvb3Rlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gbWFrZVBhZ2luYXRpb24oKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi10b3BcIj5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0YWJsZVByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRhYmxlUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnRCb2R5UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2VSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAge2hhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsfVxuICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1ib3R0b21cIj5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=