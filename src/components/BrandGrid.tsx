import '../styles/BrandGrid.css'
import '../styles/App.css'

interface Brand {
  name: string;
  src: string;
}

const brands: Brand[] = [
  { name: 'Samsung', src: 'samsung.webp' },
  { name: 'LG', src: 'lg.webp' },
  { name: 'Panasonic', src: 'panasonic.webp' },
  { name: 'Sony', src: 'sony.webp' },
  { name: 'Toshiba', src: 'toshiba.webp' },
  { name: 'Philips', src: 'philips.webp' },
  { name: 'Hisense', src: 'hisense.webp' },
  { name: 'Vortex', src: 'vortex.webp' },
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