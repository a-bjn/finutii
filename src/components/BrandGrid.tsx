import '../styles/BrandGrid.css'

interface Brand {
  name: string;
  src: string;
}

const brands: Brand[] = [
  { name: 'Hisense', src: 'src/assets/hisense.svg' },
  { name: 'LG', src: 'src/assets/lg.svg' },
  { name: 'Panasonic', src: 'src/assets/panasonic.svg' },
  { name: 'Sony', src: 'src/assets/sony.svg' },
  { name: 'Samsung', src: 'src/assets/samsung.svg' },
  { name: 'TCL', src: 'src/assets/tcl.svg' },
  { name: 'Toshiba', src: 'src/assets/toshiba.svg' },
  { name: 'Philips', src: 'src/assets/philips.svg' },
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