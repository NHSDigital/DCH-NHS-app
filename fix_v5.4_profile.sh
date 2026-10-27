for file in app/views/v5.4/pages/profile/profile-p9.html app/views/v5.4/pages/profile/profile-p5.html app/views/v5.5/pages/profile/profile-p9.html app/views/v5.5/pages/profile/profile-p5.html; do
  sed -i '' 's/title: "Face ID",\n            href: "#"/title: "Face ID",\n            href: "\/{{ version }}\/pages\/login-face-id"/g' $file
  sed -i '' 's/title: "Login and security",\n            href: "#"/title: "Login and security",\n            href: "\/{{ version }}\/pages\/login"/g' $file
  sed -i '' 's/title: "Cookies",\n            href: "#"/title: "Cookies",\n            href: "\/{{ version }}\/pages\/profile\/cookies-and-legal-agreement"/g' $file
  sed -i '' 's/href: "pages\/profile\/notifications"/href: "\/{{ version }}\/pages\/notifications"/g' $file
done
