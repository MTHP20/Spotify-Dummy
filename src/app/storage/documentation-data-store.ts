export type Documentation = {
    mainCategory: string;
    items: {
        category: string;
        icon: string;
        route: string;
        subCategory: {
            tags: string[];
        };
    }[];
};

export const documentation: Documentation[] = [
    {
        mainCategory: 'Account Manager',
        items: [
            {
                category: 'Customers',
                icon: '/assets/icons/svg/customers.svg',
                route: '/account-manager/customers',
                subCategory: {
                    tags: ['customers', 'add new company', 'statements', 'invoicing', 'devices', 'resources', 'global', 'users']
                }
            },
            {
                category: 'Users',
                icon: '/assets/icons/svg/users.svg',
                route: '/account-manager/users',
                subCategory: {
                    tags: ['users', 'administrator', 'add new administrator']
                }
            },
            {
                category: 'Tariff Setup',
                icon: '/assets/icons/svg/tariff.svg',
                route: '/account-manager/tariff',
                subCategory: {
                    tags: ['tariffs', 'tariff setup']
                }
            },
            {
                category: 'System Status',
                icon: '/assets/icons/svg/status.svg',
                route: '/account-manager/system-status',
                subCategory: {
                    tags: ['status', 'server', 'users']
                }
            }
        ]
    },
    {
        mainCategory: 'Dashboard',
        items: [
            {
                category: '',
                icon: '/assets/icons/svg/dashboard.svg',
                route: '/dashboard',
                subCategory: {
                    tags: ['dashboard', 'digital signage', 'home', 'active displays']
                }
            },
        ]
    },
    {
        mainCategory: 'Media Player',
        items: [
            {
                category: 'Media Library',
                icon: '/assets/icons/svg/mediaLibrary.svg',
                route: '/media-player/media-library',
                subCategory: {
                    tags: ['media library', 'media player', 'images', 'videos', 'system', 'upload new files', 'recently deleted']
                }
            },
            {
                category: 'Playlists',
                icon: '/assets/icons/svg/playlist.svg',
                route: '/media-player/playlists',
                subCategory: {
                    tags: ['playlists', 'schedule playlist', 'create new playlist']
                }
            },
        ]
    },
    {
        mainCategory: 'Conference Events',
        items: [
            {
                category: 'Guests List',
                icon: '/assets/icons/svg/guests.svg',
                route: '/guestlist',
                subCategory: {
                    tags: ['conference events', 'guestlist', 'add new guest', 'contact details']
                }
            },
        ]
    },
    {
        mainCategory: 'Templates',
        items: [
            {
                category: 'Template List',
                icon: '/assets/icons/svg/template.svg',
                route: '/templates',
                subCategory: {
                    tags: ['templates', 'schedule template', 'add new template']
                }
            },
        ]
    },
    {
        mainCategory: 'Schedule',
        items: [
            {
                category: 'Schedule Setup',
                icon: '/assets/icons/svg/schedule.svg',
                route: '/schedule-setup',
                subCategory: {
                    tags: ['schedule', 'screen setup', 'layout setup', 'playlist setup', 'send schedule', 'individual displays', 'group of displays']
                }
            },
        ]
    },
    {
        mainCategory: 'Calendar',
        items: [
            {
                category: '',
                icon: '/assets/icons/svg/calendar.svg',
                route: '/calendar',
                subCategory: {
                    tags: ['calendar', 'scheduler', 'timetable', 'active displays']
                }
            },
        ]
    },
    {
        mainCategory: 'Account',
        items: [
            {
                category: 'Company Details',
                icon: '/assets/icons/svg/company.svg',
                route: '/account/company-details',
                subCategory: {
                    tags: ['company details', 'edit company', 'contact details', 'resource management', 'request more space', 'disk space', 'balance', 'manage my payments']
                }
            },
            {
                category: 'User Profile',
                icon: '/assets/icons/svg/user.svg',
                route: '/account/profile',
                subCategory: {
                    tags: ['user profile', 'my account', 'edit profile', 'two-Factor authentication (2FA)', 'change password']
                }
            },
            {
                category: 'Users Management',
                icon: '/assets/icons/svg/userManagement.svg',
                route: '/account/users-management',
                subCategory: {
                    tags: ['user management', 'users', 'invite new user']
                }
            },
        ]
    },
    {
        mainCategory: 'Settings',
        items: [
            {
                category: 'Server Registration',
                icon: '/assets/icons/svg/server.svg',
                route: '/settings/server-registration',
                subCategory: {
                    tags: ['register server', 'add server', 'servers/IPs']
                }
            },
            {
                category: 'Displays',
                icon: '/assets/icons/svg/display.svg',
                route: '/settings/displays',
                subCategory: {
                    tags: ['displays', 'cloud displays', 'standalone venue display', 'IP', 'restart display', 'add new display', 'edit display', 'device ID']
                }
            },
            {
                category: 'Display Groups',
                icon: '/assets/icons/svg/displayGroup.svg',
                route: '/settings/display-groups',
                subCategory: {
                    tags: ['display groups', 'add new group']
                }
            },
            {
                category: 'Informational Displays',
                icon: '/assets/icons/svg/displayInfo.svg',
                route: '/settings/info-displays',
                subCategory: {
                    tags: ['informational displays', 'add new display']
                }
            },
            {
                category: 'Background Image',
                icon: '/assets/icons/svg/backgroundImage.svg',
                route: '/settings/background-image',
                subCategory: {
                    tags: ['background image']
                }
            },
            {
                category: 'General Settings',
                icon: '/assets/icons/svg/settings.svg',
                route: '/settings/general-settings',
                subCategory: {
                    tags: ['general settings', 'restore to default settings', 'change colour text', 'change background content', 'change image opacity', 'change informational style']
                }
            }
        ]
    },
    {
        mainCategory: 'History',
        items: [
            {
                category: '',
                icon: '/assets/icons/svg/history.svg',
                route: '/history',
                subCategory: {
                    tags: ['events and playback history', 'clear history', 'active displays', 'conference events', 'energy consumption', 'video and image']
                }
            },
        ]
    },
    {
        mainCategory: 'Support',
        items: [
            {
                category: 'Contact Support',
                icon: '/assets/icons/svg/support.svg',
                route: '/support',
                subCategory: {
                    tags: ['contact conqora support', 'help', 'KCP Network']
                }
            },
        ]
    },
];