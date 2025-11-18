# Copy the subfolder to a new location
cp -r path/to/original-repo/subfolder-name path/to/new-repo

cd path/to/new-repo
git init
git add .
git commit -m "Initial commit from subfolder"
git remote add origin https://github.com/lyudmilpetrov/automations.git
git push -u origin main