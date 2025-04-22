import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "octofit.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

def check_models_population():
    print("Checking models population...")

    print(f"Users: {User.objects.count()} entries")
    print(f"Teams: {Team.objects.count()} entries")
    print(f"Activities: {Activity.objects.count()} entries")
    print(f"Leaderboard: {Leaderboard.objects.count()} entries")
    print(f"Workouts: {Workout.objects.count()} entries")

if __name__ == "__main__":
    check_models_population()