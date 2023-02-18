import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from '../../build/locales/en/translation.json';
// import translationNL from '../../build/locales/ua/translation.json';
// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   nl: {
//     translation: translationNL,
//   },
// };

/* const resources = {
  en: {
    translation: {
      language: {
        en: 'en',
        ua: 'ua',
      },
      errors: {
        default: 'Something went wrong. Try to reload the page',
        popup: 'Sorry, something went wrong, try to re-open me :)',
      },
      welcome_page: {
        about_project: '',
        sup_btn: 'Sign Up',
        sin_btn: 'Sign In',
        board_btn: 'Go to Main Page',
        team: 'Our team',
        video: 'Video presentation',
        about:
          'This application is suitable for project planning in any industry, for working with a team of any size. It will help to build and track the work process from start to finish, you can always see at what stage a certain task is. Assign responsible for certain tasks, markers are used for visual convenience, form the structure as you like and change it depending on the needs. This application for creating project management system was created as a part of the React 2022Q1 course from Rolling Scopes School.',
        info: {
          '0': 'Team lead. Coordinated the work of the team. Implemented authorization and the task window.',
          '1': "Developer. Implemented boards page and D'n'D logic for application.",
          '2': 'Developer. Implemented single board page and was responsible for back-end.',
        },
      },
      not_found: {
        title: 'Whoops!',
        subtitle: 'This page got lost in conversation',
        paragraph: 'Not to worry. You will be redirected to homepage in ',
      },
      forms: {
        new_board: {
          title: 'Create new board',
          description: 'To create new board, please enter the title of the board',
          label: 'Title',
        },
        new_column: {
          title: 'Create new column',
          description: 'To create new column, please enter the title of the column',
          label: 'Title',
        },
        new_task: {
          title: 'Create new task',
          description: 'To create new task, please enter the title and description of the task',
          taskTitle: 'Title',
          taskDescription: 'Description',
          users: 'Members',
        },
        delete_column: {
          title: 'Remove column',
          description: 'Do you really want to remove column?',
          label: 'Board name',
        },
        delete_board: {
          title: 'Delete board',
          description: 'Are you sure to delete "{{ title }}" board?',
        },
        update_board: {
          title: 'Edit board',
          description: 'Edit title of your current board',
        },
        auth: {
          title_sup: 'Sign Up',
          title_sin: 'Sign In',
          name: 'name',
          password: 'password',
          login: 'login',
          change_btn_sup: 'Already have an account? Sign in',
          change_btn_sin: 'Back to registration',
          success: 'You successfully logged in!',
          login_required: 'Login is required',
          login_letters: 'Login should contain only letters and numbers',
          login_min: 'Login must be 6 or more characters',
          login_max: 'Login must be 15 characters or less',
          password_whitespaces: "Password mustn't contain the whitespaces",
          password_required: 'Password is required',
          password_characters:
            "Password mustn't contain the following characters '@, #, $, %, ^, &, *'",
          password_min: 'Password must be 8 or more characters',
          name_required: 'Name is required',
          name_letters: 'Name should contain only letters and numbers',
          name_min: 'Name must be 3 or more characters',
          name_max: 'Name must be 20 or less characters',
        },
        change_password: {
          title: 'Are you sure you want to change password ?',
        },
        delete_profile: {
          title: 'Are you sure you want to delete account ?',
        },
        delete_task: {
          title: 'Are you sure you want to delete task ?',
        },
        filter_board: {
          title: 'Filter by title',
          members: 'Filter by members',
          color: 'Color',
          color_none: 'None',
          clear_button: 'Clear',
        },
        delete_file: {
          title: 'Delete file',
          description: 'Are you sure you want to remove file ?',
        },
      },
      buttons: {
        submit: 'Submit',
        cancel: 'Cancel',
        back: 'Back',
        new_board: 'Create board',
        boards: 'Boards',
        new_column: 'New column',
        new_task: 'New task',
        home: 'Home',
        profile: 'Profile',
      },
      header: {
        userSettings: 'User settings',
        editProfile: 'Edit',
        logOutProfile: 'Log out',
        signInProfile: 'sign in',
        signUpProfile: 'sign up',
        burgerMenu: 'Menu',
      },
      settings: {
        title: 'User settings',
        password: 'Change password',
        language: 'Change language',
        name: 'Change name',
        delete: 'Delete profile',
        name_block: 'User name',
        login: 'User login',
        change_btn: 'change',
        delete_btn: 'delete',
        placeholder_name: 'Enter new name',
        placeholder_password: 'Enter new password',
      },
      boards: {
        boardDescriptionNoColumns: 'No columns yet',
        boardDescription: 'Columns - {{count}}',
        search_board: 'Search board',
      },
      task_popup: {
        column: 'in the column',
        author: 'Task created by:',
        users: 'Users assigned to this task:',
        desc: 'Description:',
        delete: 'Delete task',
        assigned: 'No assigned users',
        color: 'You can choose a cover for this task:',
        upload: 'Upload image',
      },
      snack_message: {
        delete_user: 'Successfully removed',
        update_user: 'Successfully updated',
        add_task: 'Task added',
        delete_task: 'Task removed',
        update_task: 'Task updated',
        add_column: 'Column added',
        delete_column: 'Column removed',
        create_board: 'Board created',
        delete_board: 'Board removed',
        update_board: 'Board updated',
        file: {
          create_file: 'File uploaded',
          delete_file: 'File removed',
        },
        task: {
          required_fields: "Task's title and description are obligatory to fill in !",
        },
        column: {
          required_fields: 'Column title is obligatory to fill in !',
          update: {
            success: 'Column title successfully updated',
            validation_error: 'Column name cannot be empty !',
          },
        },
      },
    },
  },
  ua: {
    translation: {
      language: {
        en: 'англ',
        ua: 'укр',
      },
      errors: {
        default: 'Что-то пошло не так. Попробуйте перезагрузить страницу',
        popup: 'Извините, что-то пошло не так, попробуйте открыть меня снова :)',
      },
      welcome_page: {
        about_project: '',
        sup_btn: 'Регистрация',
        sin_btn: 'Войти',
        board_btn: 'На главную',
        team: 'Наша команда',
        video: 'Видео презентация',
        about:
          'Это приложение подходит для планирования проектов в любой отрасли, для работы с командой любого размера. Оно поможет построить и отслеживать процесс работы от начала и до конца, всегда можно увидить на какой стадии находиться определенная задача. Назначайте ответственных за определённые задания, используется маркеры для визуального удобства, формируйте структуру как угодно и меняйте её в зависимости от потребностей. Это приложение по созданию системы управления проектами было создано в рамках курса React 2022Q1 от Rolling Scopes School.',
        info: "Developer. Реализовал страницу с досками и D'n'D для всего приложения.",
      },
      not_found: {
        title: 'Опаньки!',
        subtitle: 'Такой страницы не существует',
        paragraph: 'Не переживайте. Вы будете перенаправлены на главную страницу через ',
      },
      forms: {
        new_board: {
          title: 'Создать новую доску',
          description: 'Введите название для новой доски',
          label: 'Название',
        },
        new_column: {
          title: 'Создать новую колонку',
          description: 'Введите название для новой колонки',
          label: 'Название',
        },
        new_task: {
          title: 'Создать новую задачу',
          description: 'Введите название и описание новой задачи',
          taskTitle: 'Название',
          taskDescription: 'Описание',
          users: 'Участники',
        },
        delete_column: {
          title: 'Удалить колонку',
          description: 'Вы действительно хотите удалить колонку?',
          label: 'Название доски',
        },
        delete_board: {
          title: 'Удалить доску',
          description: 'Вы уверены, что хотите удалить доску "{{ title }}"?',
        },
        update_board: {
          title: 'Редактировать доску',
          description: 'Редактировать название текущей доски',
        },
        auth: {
          title_sup: 'Регистрация',
          title_sin: 'Войти',
          name: 'имя',
          password: 'пароль',
          login: 'логин',
          change_btn_sup: 'Уже есть аккаунт? Войти',
          change_btn_sin: 'Вернуться к регистрации',
          success: 'Вы вошли в аккаунт!',
          login_required: 'Укажите логин',
          login_letters: 'Логин должен содержать только буквы и цифры',
          login_min: 'Логин должен быть от 6-ти и более символов',
          login_max: 'Логин должен быть не более 15 символов',
          password_whitespaces: 'Пароль не должен содержать пробелы',
          password_required: 'Укажите пароль',
          password_characters: "Пароль не должен содержать следующие символы '@, #, $, %, ^, &, *'",
          password_min: 'Пароль должен состоять из 8 и более символов',
          name_required: 'Укажите имя',
          name_letters: 'Имя должно содержать только буквы и цифры',
          name_min: 'Имя должно быть от 3-х и более символов',
          name_max: 'Имя должно быть не более 20 символов',
        },
        change_password: {
          title: 'Вы уверены что хотите изменить пароль ?',
        },
        delete_profile: {
          title: 'Вы уверены что хотите удалить аккаунт ?',
        },
        delete_task: {
          title: 'Вы уверены что хотите удалить задание ?',
        },
        filter_board: {
          title: 'Фильтр по названию',
          members: 'Фильтр по участникам',
          color: 'Цвет',
          color_none: 'без цвета',
          clear_button: 'Очистить',
        },
        delete_file: {
          title: 'Удалить файл',
          description: 'Вы действительно хотите удалить файл ?',
        },
      },
      buttons: {
        submit: 'Подтвердить',
        cancel: 'Отмена',
        back: 'Назад',
        new_board: 'Создать доску',
        boards: 'Доски',
        new_column: 'Новая колонка',
        new_task: 'Новая задача',
        home: 'Домой',
        profile: 'Профіль',
      },
      header: {
        userSettings: 'Настройки пользователя',
        editProfile: 'Редактировать',
        logOutProfile: 'Выйти',
        signInProfile: 'Войти',
        signUpProfile: 'Регистрация',
        burgerMenu: 'Меню',
      },
      settings: {
        title: 'Настройки профиля',
        password: 'Изменить пароль',
        language: 'Изменить язык',
        delete: 'Удалить профиль',
        name: 'Изменить имя',
        login: 'Логин',
        change_btn: 'изменить',
        delete_btn: 'удалить',
        placeholder_password: 'Введите новый пароль',
        name_block: 'Имя пользователя',
        placeholder_name: 'Введите новое имя',
      },
      boards: {
        boardDescriptionNoColumns: 'Еще нет колонок',
        boardDescription: 'Колонок - {{count}}',
        search_board: 'Найти доску',
      },
      task_popup: {
        column: 'в колонке',
        author: 'Задание создал:',
        users: 'Пользователи ответственные за задание:',
        desc: 'Описание:',
        delete: 'Удалить задание',
        assigned: 'Нет ответственных',
        color: 'Вы можете выбрать цвет обложки для этого задания:',
        upload: 'Загрузить изображение',
      },
      snack_message: {
        delete_user: 'Успешно удален',
        update_user: 'Успешно обновлен',
        add_task: 'Задача добавлена',
        delete_task: 'Задача удалена',
        update_task: 'Задача обновлена',
        add_column: 'Колонка добавлена',
        delete_column: 'Колонка удалена',
        update_column: 'Колонка обновлена',
        create_board: 'Доска создана',
        delete_board: 'Доска удалена',
        update_board: 'Доска обновлена',
        file: {
          create_file: 'Файл загружен',
          delete_file: 'Файл удален',
        },
        task: {
          required_fields: 'Название и описание задания обязательные для заполнения поля !',
        },
        column: {
          required_fields: 'Название колонки обязательное для заполнения поле !',
          update: {
            success: 'Название колонки успешно обновлено',
            validation_error: 'Название колонки не может быть пустым !',
          },
        },
      },
    },
  },
}; */

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
    },
    // resources,

    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    backend: {
      //                 ⬇️
      loadPath: '/placeholder/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
