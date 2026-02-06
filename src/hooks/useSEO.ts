import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSEO(title: string, description: string) {
    const location = useLocation();
    const canonicalUrl = `https://formtoolsindia.com${location.pathname}`;

    useEffect(() => {
        document.title = `${title} | FormTools India`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', canonicalUrl);
        } else {
            canonical = document.createElement('link');
            (canonical as HTMLLinkElement).rel = 'canonical';
            (canonical as HTMLLinkElement).href = canonicalUrl;
            document.head.appendChild(canonical);
        }
    }, [title, description, canonicalUrl]);
}
