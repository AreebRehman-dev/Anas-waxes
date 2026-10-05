/*
  Product catalogue. Add, remove or rename lines here.

  `image` is optional. Either import a file from src/assets/images:
      import paraffin from '@/assets/images/paraffin.jpg';
      { name: 'Fully refined paraffin', price: '$1.90/kg', image: paraffin }
  or paste a link from a host listed in next.config.mjs:
      { ..., image: 'https://i.ibb.co/xxxxxx/wax.jpg' }
  Without one the card shows a plain tile.
*/

export const waxes = {
  id: 'waxes',
  title: 'Our Product-Waxes',
  note: 'Sourcing should feel simple, not stressful. Every grade we hold is matched to a job — candles, packaging, cosmetics, rubber, board coating — and checked before it leaves the yard. No surprises between the sample and the bulk order.',
  items: [
    { name: 'Fully refined paraffin', price: '$1.90/kg', image: null },
    { name: 'Semi refined paraffin', price: '$1.55/kg', image: null },
    { name: 'Microcrystalline wax', price: '$2.40/kg', image: null },
    { name: 'Slack wax', price: '$1.20/kg', image: null },
    { name: 'Candle wax blend', price: '$1.75/kg', image: null },
    { name: 'Hard wax, 58/60', price: '$2.10/kg', image: null },
    { name: 'Petroleum jelly base', price: '$2.65/kg', image: null },
  ],
};

export const oils = {
  id: 'oils',
  title: 'Our Product-Oils',
  note: 'Oils are blended and filtered to spec, then drummed on the day they ship. Tell us the viscosity grade and the volume you run each month and we will quote against it.',
  items: [
    { name: 'Base oil SN 150', price: '$1.35/L', image: null },
    { name: 'Base oil SN 500', price: '$1.60/L', image: null },
    { name: 'Transformer oil', price: '$2.05/L', image: null },
    { name: 'White mineral oil', price: '$2.80/L', image: null },
  ],
};
