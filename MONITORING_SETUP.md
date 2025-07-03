# Google Search Console Setup Guide

## 1. Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://covexa.ai`
3. Choose verification method (HTML file upload or DNS record)
4. Complete verification

## 2. Submit Sitemap
1. In Search Console, go to Sitemaps
2. Submit: `https://covexa.ai/sitemap.xml`
3. Monitor indexing status

## 3. Monitor Performance
- **Pages**: Track which pages are indexed
- **Performance**: Monitor clicks, impressions, CTR
- **Core Web Vitals**: Track LCP, FID, CLS metrics
- **Mobile Usability**: Ensure mobile-friendly design

## 4. Key Metrics to Watch
- **Indexing Coverage**: Should be 100% for all pages
- **Core Web Vitals**: Aim for Good (green) status
- **Search Performance**: Track keyword rankings
- **Manual Actions**: Monitor for any penalties

## 5. Lighthouse CI Integration
For continuous monitoring, integrate Lighthouse CI:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

## 6. Performance Targets
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 95
- **Core Web Vitals**: All Good (green)