from pathlib import Path
import re

root = Path(__file__).resolve().parent
pages = [
    'index.html',
    'our-table.html',
    'menu.html',
    'gallery.html',
    'catering.html',
    'contact.html',
]
doordash = 'https://www.doordash.com/en/store/marlies-restaurant-french-settlement-36252247/'

for name in pages:
    path = root / name
    assert path.exists(), f'Missing page: {name}'
    html = path.read_text(encoding='utf-8')
    assert "Marlie's Restaurant" in html, f'Missing restaurant identity in {name}'
    assert doordash in html, f'Missing DoorDash link in {name}'
    assert 'assets/images/logo.jpg' in html, f'Missing logo in {name}'
    assert 'data-nav-toggle' in html, f'Missing mobile nav in {name}'
    for href in re.findall(r'href="([^"]+\.html(?:#[^"]*)?)"', html):
        target = href.split('#')[0]
        assert (root / target).exists(), f'Broken internal link in {name}: {href}'
    for src in re.findall(r'<img[^>]+src="([^"]+)"', html):
        if src.startswith('http'):
            continue
        assert (root / src).exists(), f'Missing image in {name}: {src}'

index = (root / 'index.html').read_text(encoding='utf-8')
assert 'hero-brandmark' in index, 'Hero logo treatment missing'
assert 'our-table.html' in index and 'menu.html' in index and 'gallery.html' in index

menu = (root / 'menu.html').read_text(encoding='utf-8')
assert 'menu-columns' in menu
assert 'Marlie\'s Shrimp' in menu
assert 'Steak Night' in menu

about = (root / 'our-table.html').read_text(encoding='utf-8')
assert 'March 1, 2023' in about
assert 'Micah and Cory' in about

css = (root / 'styles.css').read_text(encoding='utf-8')
js = (root / 'app.js').read_text(encoding='utf-8')
assert '.page-hero' in css and '.gallery-masonry' in css
assert '@media (max-width: 720px)' in css
assert 'is-open' in js

print(f'All {len(pages)} pages and shared assets passed site checks')

# Regression: the three square room/exterior photos in the Gallery must display fully.
gallery = (root / 'gallery.html').read_text(encoding='utf-8')
for src in ['assets/images/dining-room.jpg', 'assets/images/bar.jpg', 'assets/images/exterior.jpg']:
    assert re.search(r'<figure[^>]*class="[^"]*show-full[^"]*"[^>]*>\s*<img src="' + re.escape(src) + r'"', gallery), f'Missing full-image gallery treatment for {src}'
assert 'gallery-uncropped-v2' in css, 'Missing uncropped gallery CSS regression marker'

# Regression: every page gets a distinct photo-backed hero treatment.
for body_class in ['page-home','page-story','page-menu','page-gallery','page-catering','page-contact']:
    assert f'.{body_class} ' in css and 'hero' in css, f'Missing hero treatment for {body_class}'
for image in ['loaded-crab-pasta.jpg','our-table-hero-collage.png','crab-platter.jpg','marlies-shrimp.jpg','combo-plate.jpg','sign.jpg']:
    assert image in css, f'Missing page hero background image: {image}'
assert 'hero-photo-backdrop-v1' in css, 'Missing shared photo hero regression marker'

# Regression: Visit hero integrates the exterior photo and hours are styled as a designed card.
assert 'visit-hero-integrated-v1' in css, 'Missing integrated Visit hero treatment'
assert 'hours-card-styled-v1' in css, 'Missing styled hours regression marker'
assert '.hours-card dl div:nth-child' in css, 'Hours rows need visual variation beyond plain white stripes'

# Regression: upgraded hero backgrounds use higher-resolution Marlie's photos and lighter washes.
assert "background-image: url('assets/images/loaded-crab-pasta.jpg');" in css, 'Home hero should use the higher-resolution food photo'
assert "background-image: url('assets/images/our-table-hero-collage.png');" in css, 'Our Table hero should use the uploaded collage photo'
assert "background-image: url('assets/images/sign.jpg');" in css, 'Visit hero should use the higher-resolution Marlie\'s sign photo'
assert 'hero-visibility-v2' in css, 'Missing lighter hero overlay regression marker'
for alpha in ['.62', '.60', '.64', '.62', '.62', '.58']:
    assert alpha in css, f'Missing expected lighter hero wash alpha {alpha}'
