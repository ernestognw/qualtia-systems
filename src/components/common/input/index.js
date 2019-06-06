import React, { Component, Fragment } from "react";
import {
  Container,
  PseudoInput,
  PseudoSelect,
  Label,
  Message,
  LeftIconContainer,
  OptionsButton,
  InputGroup,
  Prefix,
  Sufix
} from "./elements";

class Input extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { ...props } = this.props;
    const { active } = this.state;
    return (
      <Container
        marginT={props.marginT}
        marginB={props.marginB}
        marginL={props.marginL}
        marginR={props.marginR}
        onFocus={this.toggleActive}
        onBlur={this.toggleActive}
      >
        {props.label && (
          <Label font="light" htmlFor={props.id}>
            {props.label}
            {props.required && "*"}
          </Label>
        )}
        {props.leftIcon && (
          <LeftIconContainer
            success={props.success}
            warning={props.warning}
            error={props.error}
            message={props.message}
            active={active}
          >
            {props.leftIcon}
          </LeftIconContainer>
        )}
        {props.select ? (
          <Fragment>
            <PseudoSelect
              id={props.id}
              required={props.required}
              value={props.value}
              onChange={props.onChange}
              success={props.success}
              warning={props.warning}
              error={props.error}
              name={props.name}
              leftIcon={props.leftIcon}
              placeholderColor={props.placeholderColor}
            >
              {props.children}
            </PseudoSelect>
            {props.selectIcon || <OptionsButton />}
          </Fragment>
        ) : (
          <InputGroup>
            {props.prefix && (
              <Prefix
                leftIcon={props.leftIcon}
                success={props.success}
                warning={props.warning}
                error={props.error}
              >
                {props.prefix}
              </Prefix>
            )}
            <PseudoInput
              id={props.id}
              type={props.type}
              required={props.required}
              value={props.value}
              onChange={props.onChange}
              onKeyPress={props.onKeyPress}
              success={props.success}
              warning={props.warning}
              error={props.error}
              name={props.name}
              leftIcon={!props.prefix && props.leftIcon}
              placeholder={props.placeholder}
              readonly={props.readonly}
              disabled={props.disabled}
              prefix={props.prefix}
              sufix={props.sufix}
              align={props.align}
              status={props.status}
            />
            {props.sufix && (
              <Sufix
                leftIcon={props.leftIcon}
                success={props.success}
                warning={props.warning}
                error={props.error}
              >
                {props.sufix}
              </Sufix>
            )}
          </InputGroup>
        )}
        {props.message && (
          <Message
            success={props.success}
            warning={props.warning}
            error={props.error}
          >
            {props.message}
          </Message>
        )}
      </Container>
    );
  }
}

export default Input;
