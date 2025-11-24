@echo off
:: python -m venv .venv

REM Change to the directory containing your virtual environment's Scripts folder
cd .venv\Scripts

REM Activate the virtual environment
call activate.bat

REM Change to your Django project directory
cd ../../

REM Run the Django development server
python manage.py runserver

REM Keep the command prompt open after the server starts (optional)
pause