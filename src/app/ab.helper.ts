declare var dataLayer: any;
export const pushABEvent = (key = 'event', value = 'optimize.activate') => {
  if (typeof dataLayer === 'undefined') {
    return;
  }

  dataLayer.push({[key]: value});
};
