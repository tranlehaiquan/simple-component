# Radio, RadioGroup description

## Radio

Radio element can be use with or without RadioGroup

### Todo


### Basic usage

```Javascript
  <Radio value="organe" checked={true} onChange={onChange}/>
  <Radio value="banana" checked={false} onChange={onChange}/>
  <Radio value="coconut" checked={false} onChange={onChange}/>
```

### Disabled usage

```Javascript
  <Radio value="organe" disabled checked={true} onChange={onChange}/>
  <Radio value="banana" disabled checked={false} onChange={onChange}/>
  <Radio value="coconut" disabled checked={false} onChange={onChange}/>
```

## Radio group

RadioGroup component used for multiple Radio, indicates with Radio is checked

### Basic

```Javascript
  <RadioGroup value="organe" onChange={onChange}>
    <Radio value="organe" />
    <Radio value="banana" />
    <Radio value="coconut" />
  </RadioGroup>
```

### Disabled usage

Usage for disable all checkbox inside

```Javascript
  <CheckboxGroup value="organe" onChange={onChange} disabled>
    <Checkbox value="organe" />
    <Checkbox value="banana" />
    <Checkbox value="coconut" />
  </CheckboxGroup>
```
### Required usage

Usage for required all Radio but must have `name` prop go with

```Javascript
  <RadioGroup value="organe" onChange={onChange} required name="vegetable">
    <Radio value="organe" />
    <Radio value="banana" />
    <Radio value="coconut" />
  </RadioGroup>
```

### Radio event

| Event Name | Description                              | Parameters   |
|------------|------------------------------------------|--------------|
| onChange   | This event apply for Radio or RadioGroup | Value, Event |

### Radio attribute

| Prop      | Description                | Type                  | Options | Default |
|-----------|----------------------------|-----------------------|---------|---------|
| children  | Enable user custom present | Node                  |         |         |
| checked   | Whether checked or not     | Boolean               |         | false   |
| onChange  | Event on change            | Function              |         |         |
| value     |                            | Number/String/Boolean |         |         |
| name      |                            | String                |         | ''      |
| disabled  |                            | Boolean               |         | false   |
| className |                            | String                |         | ''      |
| required  |                            | Boolean               |         | false   |

### RadioGroup attribute

| Prop      | Description                             | Type                  | Options | Default |
|-----------|-----------------------------------------|-----------------------|---------|---------|
| children  | Radio components                        | Node                  |         |         |
| onChange  | Event on change                         | Function              |         |         |
| value     | For current value, not Radio itselft    | Number/String/Boolean |         |         |
| name      |                                         | String                |         | ''      |
| disabled  |                                         | Boolean               |         | false   |
| className |                                         | String                |         | ''      |
| required  |                                         | Boolean               |         | false   |
