/*
  Product catalogue, taken from the Anas Waxes Product Portfolio.

  Each product gets its own page at /products/<slug>. To add one, copy an
  entry, give it a unique slug, and import its photo from
  src/assets/images/products. `specs` are shown as label/value pairs and
  `uses` as a list on the product page.
*/

import cartonParaffinWax from '@/assets/images/products/carton-paraffin-wax.jpg';
import footsOilLowMelt from '@/assets/images/products/foots-oil-low-melt.jpg';
import footsOilMediumMelt from '@/assets/images/products/foots-oil-medium-melt.jpg';
import fullyRefinedParaffinWax from '@/assets/images/products/fully-refined-paraffin-wax.jpg';
import lionParaffinWax from '@/assets/images/products/lion-paraffin-wax.jpg';
import lowMeltParaffinWax from '@/assets/images/products/low-melt-paraffin-wax.jpg';
import microCrystallineWax from '@/assets/images/products/micro-crystalline-wax.jpg';
import petroleumJelly from '@/assets/images/products/petroleum-jelly.jpg';
import rubberProcessingOil from '@/assets/images/products/rubber-processing-oil.jpg';
import slackWaxLowMelt from '@/assets/images/products/slack-wax-low-melt.jpg';
import slackWaxMediumMelt from '@/assets/images/products/slack-wax-medium-melt.jpg';
import tigerParaffinWax from '@/assets/images/products/tiger-paraffin-wax.jpg';
import whiteOil from '@/assets/images/products/white-oil.jpg';
import yellowWax from '@/assets/images/products/yellow-wax.jpg';

export const categories = {
  waxes: {
    id: 'waxes',
    title: 'Our Product-Waxes',
    shortTitle: 'Waxes',
    note: 'From fully refined paraffin to crude slack wax, every grade we hold is matched to a job — candles, cosmetics, packaging, rubber, board and polishes — and checked before it leaves the yard.',
  },
  oils: {
    id: 'oils',
    title: 'Our Product-Oils',
    shortTitle: 'Oils',
    note: 'Industrial oils for rubber, textiles, leather, pharmaceuticals and cosmetics, supplied in drums. Tell us the grade and the volume you need and we will quote against it.',
  },
};

export const products = [
  {
    slug: 'carton-paraffin-wax',
    name: 'Carton Paraffin Wax',
    category: 'waxes',
    range: 'Premium wax products',
    image: cartonParaffinWax,
    specs: [
      { label: 'Oil content', value: '3%' },
      { label: 'Packaging', value: '25 kg Carton' },
    ],
    description:
      'A highly refined, versatile paraffin wax characterized by its low oil content and excellent stability. It provides a clean, consistent burn and solid structural integrity.',
    uses: [
      'High-end candle manufacturing',
      'Cosmetic formulations',
      'Premium packaging coatings',
    ],
  },
  {
    slug: 'lion-paraffin-wax',
    name: 'Lion Paraffin Wax',
    category: 'waxes',
    range: 'Premium wax products',
    image: lionParaffinWax,
    specs: [
      { label: 'Oil content', value: '3-5%' },
      { label: 'Packaging', value: '30 kg Bag' },
    ],
    description:
      'A dependable semi-refined wax that strikes a perfect balance between performance and economy, offering good moisture resistance and moldability.',
    uses: [
      'PVC manufacturing',
      'Matchstick industries',
      'Polishes',
      'Standard household candles',
    ],
  },
  {
    slug: 'fully-refined-paraffin-wax',
    name: 'Fully Refined Paraffin Wax',
    category: 'waxes',
    range: 'Premium wax products',
    image: fullyRefinedParaffinWax,
    specs: [
      { label: 'Melting point', value: '58-60°C' },
      { label: 'Packaging', value: '25 kg Carton' },
    ],
    description:
      'A premium, highly purified grade of paraffin wax characterized by its clean white appearance, odorless profile, and extremely low oil content, offering superior stability and a smooth, flawless finish.',
    uses: [
      'High-grade luxury candle making',
      'Cosmetic formulations',
      'Pharmaceutical ointments',
      'Food-grade packaging coatings',
    ],
  },
  {
    slug: 'tiger-paraffin-wax',
    name: 'Tiger Paraffin Wax',
    category: 'waxes',
    range: 'Wax products',
    image: tigerParaffinWax,
    specs: [
      { label: 'Oil content', value: '7-12%' },
      { label: 'Packaging', value: '30 kg Bag' },
    ],
    description:
      'With a slightly higher oil content, this wax is softer and more pliable at room temperature, making it ideal for applications requiring flexibility and higher adhesion.',
    uses: [
      'Wood board sizing',
      'Heavy-duty industrial lubricants',
      'Specialized industrial candles',
    ],
  },
  {
    slug: 'low-melt-paraffin-wax',
    name: 'Low Melt Paraffin Wax',
    category: 'waxes',
    range: 'Wax products',
    image: lowMeltParaffinWax,
    specs: [
      { label: 'Oil content', value: '3-5%' },
      { label: 'Packaging', value: '30 kg Bag' },
    ],
    description:
      'Formulated to turn liquid at lower temperatures, this wax ensures safe application to heat-sensitive surfaces and is gentle on direct contact.',
    uses: ['Spa and therapeutic treatments', 'Flexible paper coatings', 'Delicate casting'],
  },
  {
    slug: 'yellow-wax',
    name: 'Yellow Wax',
    category: 'waxes',
    range: 'Wax products',
    image: yellowWax,
    specs: [
      { label: 'Oil content', value: '7-12%' },
      { label: 'Packaging', value: '30 kg Bag' },
    ],
    description:
      'Retaining its natural hue, this robust, unbleached wax provides excellent moisture barrier properties and strong lubrication without the cost of final bleaching.',
    uses: ['Rust prevention treatments', 'Tire and rubber processing', 'Industrial polishes'],
  },
  {
    slug: 'micro-crystalline-wax',
    name: 'Micro Crystalline Wax',
    category: 'waxes',
    range: 'Wax products',
    image: microCrystallineWax,
    specs: [{ label: 'Packaging', value: '25 kg Carton' }],
    description:
      'Characterized by finer crystals than standard paraffin, this premium wax is highly flexible, tacky, and possesses a higher melting point and elasticity.',
    uses: [
      'High-grade cosmetics (lipsticks, creams)',
      'Hot-melt adhesives',
      'Laminating agents',
    ],
  },
  {
    slug: 'petroleum-jelly',
    name: 'Petroleum Jelly',
    category: 'waxes',
    range: 'Wax products',
    image: petroleumJelly,
    specs: [{ label: 'Packaging', value: '175 kg Drum' }],
    description:
      'A highly purified, semi-solid mixture of hydrocarbons. It acts as an outstanding emollient, barrier cream base, and specialized lubricant with high stability.',
    uses: [
      'Medical and pharmaceutical ointments',
      'Personal care and cosmetics',
      'Precision machinery lubrication',
    ],
  },
  {
    slug: 'slack-wax-low-melt',
    name: 'Slack Wax (Low Melt)',
    category: 'waxes',
    range: 'Wax products',
    image: slackWaxLowMelt,
    specs: [
      { label: 'Oil content', value: '40%' },
      { label: 'Packaging', value: '175 kg Drum' },
    ],
    description:
      'A crude wax with a rich oil content, acting as a highly effective waterproofing and binding agent. Its low melt profile makes it easy to handle in large-scale operations.',
    uses: [
      'Dust control agents',
      'Artificial fireplace logs',
      'Composite board manufacturing',
    ],
  },
  {
    slug: 'slack-wax-medium-melt',
    name: 'Slack Wax (Medium Melt)',
    category: 'waxes',
    range: 'Wax products',
    image: slackWaxMediumMelt,
    specs: [
      { label: 'Oil content', value: '25%' },
      { label: 'Packaging', value: '175 kg Drum' },
    ],
    description:
      'An intermediate-refined slack wax that balances firmness with heavy oil properties, providing excellent thermal insulation and structural stability.',
    uses: [
      'Wax emulsions',
      'Construction material treatments',
      'Heavy canvas and tarpaulin coatings',
    ],
  },
  {
    slug: 'foots-oil-medium-melt',
    name: 'Foots Oil (Medium Melt)',
    category: 'oils',
    range: 'Industrial oil products',
    image: footsOilMediumMelt,
    specs: [{ label: 'Packaging', value: '175 kg Drum' }],
    description:
      'A valuable by-product derived during the sweating of slack wax. It contains high levels of liquid hydrocarbons, functioning as an exceptional plasticizer and softener.',
    uses: [
      'Textile treatments',
      'Leather processing and softening',
      'Matchstick head formulations',
    ],
  },
  {
    slug: 'rubber-processing-oil',
    name: 'Rubber Processing Oil (RPO)',
    category: 'oils',
    range: 'Industrial oil products',
    image: rubberProcessingOil,
    specs: [{ label: 'Packaging', value: 'Standard Drum' }],
    description:
      'A high-performance oil designed to improve the dispersion of fillers and flow characteristics of rubber compounds during milling and extrusion.',
    uses: [
      'Automotive tire manufacturing',
      'Industrial hoses',
      'Rubber footwear',
      'Technical rubber goods',
    ],
  },
  {
    slug: 'white-oil',
    name: 'White Oil',
    category: 'oils',
    range: 'Industrial oil products',
    image: whiteOil,
    specs: [{ label: 'Packaging', value: '175 kg Drum' }],
    description:
      'A highly refined, colorless, and odorless mineral oil that is chemically inert. It meets stringent purity standards for sensitive applications.',
    uses: [
      'Pharmaceutical formulations',
      'Premium cosmetics',
      'Food processing machinery lubrication',
      'Plastics',
    ],
  },
  {
    slug: 'foots-oil-low-melt',
    name: 'Foots Oil (Low Melt)',
    category: 'oils',
    range: 'Industrial oil products',
    image: footsOilLowMelt,
    specs: [{ label: 'Packaging', value: '175 kg Drum' }],
    description:
      'A valuable by-product derived during the sweating of slack wax. It contains high levels of liquid hydrocarbons, functioning as an exceptional plasticizer and softener.',
    uses: [
      'Rubber and tire manufacturing',
      'Match production',
      'Lubricants and greases',
      'Waterproofing',
    ],
  },
];
