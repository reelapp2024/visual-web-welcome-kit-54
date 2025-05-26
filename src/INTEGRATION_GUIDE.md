
# Template Integration Guide

यह guide आपको बताएगी कि इस modular template को अपने existing React projects में कैसे integrate करें।

## Quick Start

### 1. Basic Integration

```tsx
import { Template } from './components/Template';
import { defaultTheme, blueTheme } from './config/themes';
import { defaultContent } from './config/content';

function MyApp() {
  return (
    <Template theme={blueTheme} content={defaultContent}>
      {/* Your existing app content */}
    </Template>
  );
}
```

### 2. Custom Theme बनाना

```tsx
import { ThemeConfig } from './config/themes';

const myCustomTheme: ThemeConfig = {
  id: 'custom',
  name: 'My Business',
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    accent: '#your-accent-color',
    background: '#ffffff',
    text: '#000000',
    muted: '#666666'
  },
  brandName: 'Your Business Name',
  phone: '(123) 456-7890',
  email: 'info@yourbusiness.com'
};
```

### 3. Custom Content Configuration

```tsx
import { ContentConfig } from './config/content';

const myContent: ContentConfig = {
  services: [
    { name: 'Service 1', slug: 'service-1' },
    { name: 'Service 2', slug: 'service-2' }
  ],
  areas: [
    { name: 'Area 1', slug: 'area-1' },
    { name: 'Area 2', slug: 'area-2' }
  ],
  hero: {
    title: 'Your Hero Title',
    subtitle: 'Your subtitle',
    cta: 'Your CTA'
  },
  about: {
    title: 'About Title',
    description: 'Your description'
  }
};
```

### 4. Individual Components का Use

```tsx
// केवल Header component use करना
import ThemedHeader from './components/ThemedHeader';
import { ThemeProvider } from './context/ThemeContext';

function MyPage() {
  return (
    <ThemeProvider initialTheme={myTheme}>
      <ThemedHeader />
      {/* Your content */}
    </ThemeProvider>
  );
}
```

### 5. Runtime Theme Switching

```tsx
import { useTheme } from './context/ThemeContext';
import { availableThemes } from './config/themes';

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  
  return (
    <select onChange={(e) => {
      const theme = availableThemes.find(t => t.id === e.target.value);
      if (theme) setTheme(theme);
    }}>
      {availableThemes.map(theme => (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
}
```

## Advanced Features

### CSS Variables का Use
Template automatically CSS variables set करता है जो आप अपने custom CSS में use कर सकते हैं:

```css
.my-button {
  background-color: var(--theme-primary);
  color: white;
  border: 2px solid var(--theme-secondary);
}
```

### Multiple Theme Support
आप एक ही app में multiple themes रख सकते हैं और runtime पर switch कर सकते हैं।

### Component Isolation
हर component independently use हो सकता है। आपको पूरा template use करने की जरूरत नहीं।

### Content Management
सारा content configurable है - colors से लेकर text तक सब कुछ।

## Best Practices

1. **Theme Consistency**: एक theme में consistent colors use करें
2. **Content Structure**: Content structure को consistent रखें
3. **Component Reuse**: Components को reuse करने के लिए props properly pass करें
4. **Performance**: केवल जरूरी components को import करें

## Migration Steps

1. Copy theme और context files
2. अपने existing components को theme-aware बनाएं
3. Content को configurable बनाएं
4. CSS variables add करें
5. Step by step migrate करें

यह approach आपको flexibility देती है अपने existing projects में gradually integrate करने की।
