import '../styles/BrandGrid.css'
import '../styles/App.css'

interface Brand {
  name: string;
  src: string;
}

const brands: Brand[] = [
  { name: 'Samsung', src: 'samsung.svg' },
  { name: 'LG', src: 'lg.svg' },
  { name: 'Panasonic', src: 'panasonic.svg' },
  { name: 'Sony', src: 'sony.svg' },
  { name: 'Toshiba', src: 'toshiba.svg' },
  { name: 'Philips', src: 'philips.svg' },
  { name: 'Hisense', src: 'hisense.svg' },
  { name: 'Vortex', src: 'vortex.svg' },
]

export default function BrandLogoGrid() {
  return (
    <div className="brand-grid-container">
      <div className="brand-grid">
        {brands.map((brand) => (
          <div key={brand.name} className="logo-wrapper">
            <img src={brand.src} alt={`${brand.name} logo`} className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  )
}