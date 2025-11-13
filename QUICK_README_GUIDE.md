# Quick Reference: Generate README for YelpCamp

## 🚀 Fastest Method (5 minutes)

```bash
# 1. Install the generator
npm install -g readme-md-generator

# 2. Run it
readme

# 3. Answer the prompts or press Enter to use defaults from .readme-md-generator.json

# Done! Your README.md will be updated/created
```

## 📋 Using Pre-configured Settings

This repository includes a `.readme-md-generator.json` file with pre-filled information. Just run:

```bash
readme
```

The generator will use these defaults:
- ✅ Project Name: YelpCamp
- ✅ Description: Full-stack camping review app
- ✅ Author: Busola Ogunbayo
- ✅ Prerequisites: Node.js, MongoDB, Cloudinary
- ✅ License: ISC

You can still customize any field during the interactive prompts.

## 🌐 Alternative: Web-Based (No Installation)

Visit **https://readme.so** and use the visual editor.

## 📖 Detailed Guide

For comprehensive instructions on all available methods, see [README_GENERATOR_GUIDE.md](./README_GENERATOR_GUIDE.md)

## 🔧 Common Issues

**Q: Command 'readme' not found?**  
A: Install globally: `npm install -g readme-md-generator`

**Q: Want to regenerate without losing custom content?**  
A: Backup your current README.md first, then run the generator

**Q: How to customize the template?**  
A: Edit `.readme-md-generator.json` with your preferences

**Q: Can I automate this?**  
A: Yes! See the GitHub Actions workflow in the detailed guide

## 💡 What Happens When You Run `readme`?

1. The tool reads your `package.json`
2. It detects Git repository information
3. It uses `.readme-md-generator.json` for defaults
4. It asks interactive questions (or uses defaults)
5. It generates a beautiful README.md with:
   - Project description
   - Installation instructions
   - Usage examples
   - Prerequisites
   - Author information
   - License details
   - And more!

## 📝 Manual Editing

After generation, you should add:
- Screenshots of your application
- Detailed feature descriptions
- API documentation (if applicable)
- Deployment instructions
- Troubleshooting section

## 🎯 Pro Tips

- Run `readme` whenever you add major features
- Keep your package.json up to date (it's used for generation)
- Add badges for professional look
- Include a demo link if you deploy the app

---

**Ready to generate your README? Run:** `npm install -g readme-md-generator && readme`
