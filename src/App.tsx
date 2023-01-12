import { ElementType, ComponentPropsWithoutRef} from 'react';
import './App.css';


interface IButtonProps<T extends ElementType> {
  component?: T | "button";
}

type MyComponentProps<T extends ElementType> = IButtonProps<T> &
  ComponentPropsWithoutRef<T>;

function MyComponent<T extends ElementType = "button">({
  component: Tag = "button",
  ...props
}: MyComponentProps<T>) {
  return <Tag {...props} />;
}

function App() {
  return (
    <div className="App">
      Typescript Bug
      <div>
        <MyComponent onClick={(e) => console.log(e)}>Button</MyComponent>
        <MyComponent<'button'> onClick={(e) => console.log(e)}>Button</MyComponent>
      </div>
      <div>
        <MyComponent component="a" onClick={(e) => console.log(e)}>
          Link
        </MyComponent>
      </div>
    </div>
  );
}

export default App;
