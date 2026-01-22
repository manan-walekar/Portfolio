# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please do NOT open a public issue.

Instead, please email security concerns with:

- Description of the vulnerability
- Steps to reproduce (if possible)
- Potential impact
- Suggested fix (if you have one)

Please allow time for the maintainers to respond and address the issue before public disclosure.

## Supported Versions

Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Security Best Practices

### Environment Variables

- Never commit `.env` files to version control
- Use `.env.example` as a template
- Keep sensitive keys (API keys, secrets) secure
- Rotate keys regularly

### Dependencies

- Keep dependencies updated: `npm update`
- Audit dependencies: `npm audit`
- Review security advisories regularly

### Deployment

- Use HTTPS for all connections
- Enable security headers (configured in Vercel)
- Monitor application logs for suspicious activity
- Use strong authentication for admin functions

## Security Headers

The following headers are automatically configured in production:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Contact

For security concerns, contact: [your-email@example.com]
