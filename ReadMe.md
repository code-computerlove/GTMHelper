# GA Module

## Config

- `data-ga-category` will be the wrapper that is put around each top level component.
- `data-ga-action` is the type of event it is
- `data-ga-label` any extra information which could categorise the actions
- `data-ga-scroll-tracking` add to the top level component when scroll tracking

these options can be changed to your own config if needed:

```js
import { ConfigChange } from 'ga-module';

const config = {
  category: 'data-ga-category-new',
  scroll: 'data-ga-scroll-tracking-new',
  action: 'data-ga-action-new',
  label: 'data-ga-label-new',
};

ConfigChange(cofig);
```

## Data Structure

```
// On VIEW
dataLayer.push({
  'event': 'promotionView',
    'ecommerce': {
    'promoView': {
      'promotions': [
        {
          'name': data-ga-category,
          'position': data-ga-action,
          'creative': data-ga-label
        }
      ]
    }
  }
});

// On CLICK
dataLayer.push({
  'event': 'promotionClick',
    'ecommerce': {
    'promoClick': {
      'promotions': [
        {
          'name': data-ga-category,
          'position': data-ga-action,
          'creative': data-ga-label
        }
      ]
    }
  }
});
```

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
