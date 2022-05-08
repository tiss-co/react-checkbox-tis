import React from 'react';
import css from './styles.module.scss';
import { Checkbox as MUICheckbox, FormControlLabel, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Checkbox = ({
  className,
  label,
  labelPosition = 'start',
  onChange,
  checked,
  color = '#5E80C3',
  backgroundColor = '#d8d8d8',
  darkMode = false,
  id,
  ...props
}) => {
  const WhiteCheckbox = withStyles({
    root: {
      color: 'white',
      '&$checked': {
        color: color,
      },
      '& .MuiIconButton-label': {
        position: 'relative',
      },
      '&:not($checked) .MuiIconButton-label:after': {
        content: '""',
        height: 14,
        width: 14,
        position: 'absolute',
        backgroundColor: backgroundColor,
      },
    },
    checked: {},
  })(props => <MUICheckbox {...props} />);

  if (!label)
    return (
      <WhiteCheckbox
        className={classNames(css.Checkbox_CheckboxTis, {
          [css.Dark_CheckboxTis]: darkMode
        }, className)}
        onChange={e => onChange(e.target.value, e.target.checked)}
        value={label}
        size='small'
        checked={checked}
        {...props}
      />
    );

  return (
    <FormControlLabel
      className={classNames(css.CheckboxForm_CheckboxTis, {
        [css.Dark_CheckboxTis]: darkMode
      }, className)}
      id={id}
      control={
        <WhiteCheckbox
          className={classNames(css.Checkbox_CheckboxTis, {
            [css.Dark_CheckboxTis]: darkMode
          }, className)}
          onChange={e => onChange(e.target.value, e.target.checked)}
          value={label}
          size='small'
          checked={checked}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPosition}
    />
  );
};

export const labelPosition = {
  top: 'top',
  bottom: 'bottom',
  start: 'start',
  end: 'end'
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  darkMode: PropTypes.bool,
  id: PropTypes.string,
};