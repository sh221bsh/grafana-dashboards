import React, { FC, useContext } from 'react';
import { Select } from 'antd';
import { QueryAnalyticsProvider } from 'pmm-qan/panel/provider/provider';
import { useTheme } from '@grafana/ui';
import { DIMENSIONS_OPTIONS } from './Dimension.constants';
import { getStyles } from './Dimension.styles';

const { Option } = Select;

export const Dimension: FC = () => {
  const {
    contextActions,
    panelState: { groupBy },
  } = useContext(QueryAnalyticsProvider);

  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <div className={styles.groupByWrapper}>
      <Select
        optionLabelProp="label"
        defaultValue={groupBy}
        onChange={contextActions.changeGroupBy}
        className="group-by-selector"
        data-qa="group-by"
        dropdownClassName="group-by-selector-dropdown"
      >
        {DIMENSIONS_OPTIONS.map((option) => (
          <Option value={option.value} label={option.label} key={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
