# GA Module

## Config

## Data Structure

## Tracking click events on components

what will it do and how does it do it...

```js
import { TrackClickEvents } from 'ga-module';

TrackClickEvents();// uses default config
```


## Tracking if the user has viewed a component
what will it do and how does it do it...

```js
import { TrackComponentsInView } from 'ga-module';

TrackComponentsInView();
```

## Changing the config based on data attributes
what will it do and how does it do it...

uses default if one isnt set.

```js
import { ConfigChange,  TrackClickEvents } from 'ga-module';

const config = {
  category: 'data-ga-category-new',
  action: 'data-ga-action-new',
  label: 'data-ga-label-new',
};

ConfigChange(cofig);
TrackClickEvents();

```

## Troubleshooting

Your babel config will need the spread-operator module: https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread to run this module
