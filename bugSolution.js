```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href='/about' replace >
        <a>About Us</a>
      </Link>        
    </div>
  );
}

export default MyComponent; 
```