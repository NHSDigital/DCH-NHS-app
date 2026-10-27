sed -i '' '/title: "Manage your notifications",/{
n
s/href: "#"/href: "\/{{ version }}\/pages\/notifications"/
}' app/views/v6/pages/profile/cookies-and-legal-agreement.html

sed -i '' '/title: "Manage your notifications",/{
n
s/href: "#"/href: "\/{{ version }}\/pages\/notifications"/
}' app/views/v6/pages/account-and-settings/cookies-and-legal-agreement.html
