PROD="prod"
DEV="dev"
UP="up"
DOWN="down"
NO_NGINX="-n"
DISABLE_LOGS="-d"

function invalid_argument() {
  echo "Invalid argument: $1"
  echo "Usage: $0 [OPTION] [FLAG]"
  echo "  OPTION:"
  echo "    - $UP (start services)"
  echo "    - $DOWN (stop and remove services, prune images and volumes)"
  echo "  FLAG:"
  echo "    - $NO_NGINX (only for dev mode up, run application without nginx)"
  echo "    - $DISABLE_LOGS (disable logs)"
  exit 1
}

main() {
  if [[ $# -lt 1 ]]; then
    invalid_argument "Missing arguments"
  fi

  local mode="$(./manage.sh mode)"
  local option="$1"
  local flag="$2"

  case "$mode" in
    "$PROD" | "$DEV")
      case "$option" in
        "$UP")
        local additional=""
        if [ "$flag" = "$DISABLE_LOGS" ]; then additional="$DISABLE_LOGS"; fi
        case $mode in
          "$DEV")
            case $flag in
            "$NO_NGINX")
              docker build -t core-front-dev-app --target app-dev .
              docker run -d --name core-front-dev -p 81:81 -v .:/app -v /app/node_modules core-front-dev-app
              ;;
            *)
              docker-compose -f "docker-compose.$mode.yml" up --build $additional
              ;;
            esac
            ;;
          *)
            docker-compose -f "docker-compose.$mode.yml" up --build $additional
            ;;
          esac
          ;;
        "$DOWN")
          docker rm -f $(docker ps -a | grep genamshenfron | awk '{print $1}')
          docker image prune -fa
          docker volume prune -fa
          ;;
        *)
          invalid_argument "Invalid option: $option"
          ;;
      esac
      ;;
    *)
      invalid_argument "Invalid mode: $mode"
      ;;
  esac
}

main "$@"