# Checkbox, CheckboxGroup description

## Checkbox

Checkbox element can be use with or without CheckboxGroup

### Todo

- [x] Add indeterminate `/ˌɪn.dɪˈtɝː.mɪ.nət/` for checkbox
- [ ] Add min/ max for checkboxGroup

### Basic usage

```Javascript
  <Checkbox value="organe" checked={true} onChange={onChange}/>
  <Checkbox value="banana" checked={false} onChange={onChange}/>
  <Checkbox value="coconut" checked={false} onChange={onChange}/>
```

### Disabled usage

```Javascript
  <Checkbox value="organe" disabled checked={true} onChange={onChange}/>
  <Checkbox value="banana" disabled checked={false} onChange={onChange}/>
  <Checkbox value="coconut" disabled checked={false} onChange={onChange}/>
```

## Checkbox group

CheckboxGroup component used for multiple Checkbox, indicates with Checkbox is checked

### Basic

```Javascript
  <CheckboxGroup value="organe" onChange={onChange}>
    <Checkbox value="organe" />
    <Checkbox value="banana" />
    <Checkbox value="coconut" />
  </CheckboxGroup>
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

### Checkbox event

| Event Name | Description                                    | Parameters   |
|------------|------------------------------------------------|--------------|
| onChange   | This event apply for Checkbox or CheckboxGroup | Value, Event |

### Checkbox attribute

| Prop           | Description                | Type                  | Options | Default |
|----------------|----------------------------|-----------------------|---------|---------|
| children       | Enable user custom present | Node                  |         |         |
| checked        | Whether checked or not     | Boolean               |         | false   |
| onChange       | Event on change            | Function              |         |         |
| value          |                            | Number/String/Boolean |         |         |
| name           |                            | String                |         | ''      |
| disabled       |                            | Boolean               |         | false   |
| className      |                            | String                |         | ''      |
| required       |                            | Boolean               |         | false   |
| indeterminate  |                            | Boolean               |         | false   |

### CheckboxGroup attribute

| Prop      | Description                             | Type                  | Options | Default |
|-----------|-----------------------------------------|-----------------------|---------|---------|
| children  | Checkbox components                     | Node                  |         |         |
| onChange  | Event on change                         | Function              |         |         |
| value     | For current value, not Checkbox itselft | Number/String/Boolean |         |         |
| name      |                                         | String                |         | ''      |
| disabled  |                                         | Boolean               |         | false   |
| className |                                         | String                |         | ''      |
