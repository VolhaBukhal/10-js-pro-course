import React, {useState, useContext, useCallback} from 'react';
import {User, Post} from 'types/types'
import {ThemeContext} from 'components/ThemeProvider'
import classNames from 'classnames/bind'
import style from './PostItem.module.css'
import AuthorModal from '../AuthorModal'

interface MyPostListProps {
    post: Post;
    user: User;
    bgColor?: "calm" | "bright";
    border?: "dashed" | "solid"
}

const cx = classNames.bind(style);


const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user, bgColor, border} = props;
    const [isOpened, setIsOpened] = useState(true);
    const [theme, setTheme]= useContext(ThemeContext);

    const handleModal = useCallback(() => {
        setIsOpened(!isOpened)
    }, [isOpened, setIsOpened] )

    // const styleType = theme === 'light' ? style.dark : style.light;
    

    return (
        // <div className={style.postItem + " " + styleType}>
        <div className={cx({
            postItem: true,
            dark: theme === "light",
            light: theme === "dark",
           }, bgColor, border)}>
            <h2 className={theme}>{post.title}</h2>
            <p className={`${style["post-body"]} ${theme}`}>{post.body}</p>
            <div className={style["post-author"]} onClick={handleModal}>
                <span>Author:</span> {user.name}
            </div>
            <AuthorModal user={user} isHidden={isOpened} handleModal={handleModal} theme={theme} size="small" />
        </div>

    );
};

export default PostItem;