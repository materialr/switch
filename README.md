# MaterialR Switch

**@materialr/switch**

[![Build Status](https://travis-ci.org/materialr/switch.svg?branch=master)](https://travis-ci.org/materialr/switch)
[![Coverage Status](https://coveralls.io/repos/github/materialr/switch/badge.svg?branch=master)](https://coveralls.io/github/materialr/switch?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/a12ee5d7-912e-4ba2-a3ba-d2722e58df3a/badge)](https://nodesecurity.io/orgs/materialr/projects/a12ee5d7-912e-4ba2-a3ba-d2722e58df3a)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React Material switch implementation

## Installation

```sh
$ npm install --save @materialr/switch
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/switch)
showcasing all variants.

## Components

### Default export

```js
import Switch from '@materialr/switch';
```

**Props**

| Prop          | Type   | Required | Default    | Description                        |
| ------------- | ------ | -------- | ---------- | ---------------------------------- |
| `checked`     | bool   | No       | false      | Whether the switch is on           |
| `className`   | string | No       | undefined  | Additional classNames to add       |
| `disabled`    | bool   | No       | false      | Whether the switch is disabled     |
| `id`          | string | No       | `uuidv1()` | The id attribute of the element    |
| `label`       | string | Yes      | N/A        | The label to render for the switch |
| `name`        | string | No       | undefined  | The element's name attribute       |
| `onBlur`      | func   | No       | undefined  | The `blur` event handler           |
| `onChange`    | func   | No       | undefined  | The `change` event handler         |
| `onDragStart` | func   | No       | undefined  | The `dragstart` event handler      |
| `onDrop`      | func   | No       | undefined  | The `drop` event handler           |
| `onFocus`     | func   | No       | undefined  | The `focus` event handler          |
