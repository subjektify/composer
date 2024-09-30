import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ComposerNavbar() {
    return (
        <nav className={clsx("navbar", styles.navbarHeight)}>
            <div className="navbar__inner">
                <div className="navbar__items">
                    <a className="navbar__item navbar__link" href="#url">File</a>
                    <a className="navbar__item navbar__link" href="#url">Edit</a>
                    <div className="navbar__item dropdown dropdown--hoverable">
                        <a className="navbar__link" href="#url">View</a>
                        <ul className="dropdown__menu">
                            <li>
                                <a className="dropdown__link" href="#url">v1.8.0</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">v1.7.0</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">v1.6.0</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">All Versions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__item dropdown dropdown--hoverable">
                        <a className="navbar__link" href="#url">Add</a>
                        <ul className="dropdown__menu">
                            <li>
                                <a className="dropdown__link" href="#url">String</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">Integer</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">Float</a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">Boolean</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar__items navbar__items--right">
                    <form>
                        <div className="navbar__search">
                            <input className="navbar__search-input" placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}
