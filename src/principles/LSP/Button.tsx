import React from "react";
import "./Style.css";

interface IButtonProps {
  label: string;
}

// Base component
class Button extends React.Component<IButtonProps> {
  render() {
    return <button className='button'>{this.props.label}</button>;
  }
}

// Derived component
class RedButton extends Button {
  render() {
    return (
      <button className='button' style={{ background: "red" }}>
        {this.props.label}
      </button>
    );
  }
}

export class LSP extends React.Component {
  render() {
    return (
      <>
        <div className='button-wrapper'>
          <Button label='Click me' />
          <RedButton label='Click me' />
        </div>
      </>
    );
  }
}
