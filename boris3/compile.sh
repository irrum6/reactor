#compile
if [ $1 = 'card' ]; then
	sass pages/components/Card.scss pages/components/styles/Card.css
elif [ $1 = 'prompt' ]; then
	 sass pages/components/Prompt.scss pages/components/styles/Prompt.css
elif [ $1 = 'navbar' ]; then
    sass pages/components/Navbar.scss pages/components/styles/Navbar.css
elif [ $1 = 'alert' ]; then
    sass pages/components/alert.scss pages/components/styles/alert.css
elif [ $1 = 'listwindow' ]; then
    sass pages/components/listwindow.scss pages/components/styles/listwindow.css
elif [ $1 = 'board' ]; then
    sass pages/components/Board.scss pages/components/styles/Board.css
elif [ $1 = 'common' ]; then
    sass pages/styles/common.scss pages/styles/common.css
elif [ $1 = 'collors' ]; then
    sass pages/styles/colors.scss pages/styles/colors.css
else
    sass pages/components/Prompt.scss pages/components/styles/Prompt.css
    sass pages/components/Navbar.scss pages/components/styles/Navbar.css
    sass pages/components/alert.scss pages/components/styles/alert.css
    sass pages/components/listwindow.scss pages/components/styles/listwindow.css
    sass pages/components/Board.scss pages/components/styles/Board.css
    sass pages/components/Card.scss pages/components/styles/Card.css
    sass pages/styles/common.scss pages/styles/common.css
    sass pages/styles/colors.scss pages/styles/colors.css
fi
echo "compiled";