# Toast

Toast message for simple text

### Todo

### Basic usage

```Javascript
state = {
  show: true
}

<Toast 
  message="Hello the world???" 
  show={this.state.show} 
  type="success"
/>
```

### Custom class

Like name, use for custom Toast

### Use with close, duration

Can make toast component close in amount of time by pass close method and duration

```Javascript
state = {
  show: true
}

<Toast
  message="Hello the world???" 
  show={this.state.show} 
  type="success"
  close={() => {
    this.setState({show: false});
  }}
  duration={1500}
/>
```

### Toast event

| Event Name | Description                       | Parameters   |
|------------|-----------------------------------|--------------|
| onClose    | Trigger when Toast closed         |              |

### Toast attribute

| Prop        | Description                  | Type     | Options                                | Default |
|-------------|------------------------------|----------|----------------------------------------|---------|
| type        | For type of Toast            | String   | 'success', 'info', 'warning', 'danger' | info    |
| message     |                              | String   |                                        |         |
| show        |                              | Boolean  |                                        | false   |
| customClass |                              | String   |                                        |         |
| close       | Method go with duration prop | Function |                                        |         |
| duration    | Time Toast display           | Number   |                                        |         |
