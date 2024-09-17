
CHANGE="change"
AUTH="auth"
MODE="mode"

FILE=".env"

function invalid_argument() {
  echo "Invalid command"
  exit 1
}

function getValue() {
    local name=$1
    local value=$(grep -E "^${name}=" $FILE | cut -d '=' -f 2 | tr -d "'")
    echo "$value"
}
function setValue() {
    local file=$1
    local name=$2
    local value=$3

    local SYSTEM=$(uname -s)

    case $SYSTEM in
    "Darwin")
      sed -i "" "s|^${name}=.*|${name}='$value'|g" $file
      ;;
    *)
      sed -i "s|^${name}=.*|${name}='$value'|g" $file
      ;;
    esac

    echo "Current status -> $value"
}

function changeAuth() {
    local name="VITE_AUTH"
    CURRENT_VALUE=$(getValue $name)

    if [ "$CURRENT_VALUE" == "true" ]; then
      NEW_VALUE="false"
    elif [ "$CURRENT_VALUE" == "false" ]; then
      NEW_VALUE="true"
    else
      echo "Unknown value: $CURRENT_VALUE"
      exit 1
    fi

    setValue $FILE $name $NEW_VALUE
}
function changeMode() {
    local name="VITE_MODE"
    CURRENT_VALUE=$(getValue $name)

    if [ "$CURRENT_VALUE" == "dev" ]; then
      NEW_VALUE="prod"
    elif [ "$CURRENT_VALUE" == "prod" ]; then
      NEW_VALUE="dev"
    else
      echo "Unknown value: $CURRENT_VALUE"
      NEW_VALUE="dev"
    fi

    setValue $FILE $name $NEW_VALUE
}

main(){
  local action="$1"
  local value="$2"

  case $action in
  $CHANGE)
    case $value in
    $AUTH)
      changeAuth
      ;;
    $MODE)
      changeMode
      ;;
    *)
      invalid_argument
      ;;
    esac
    ;;
  $AUTH)
    echo $(grep -E '^VITE_AUTH=' $FILE | cut -d '=' -f 2 | tr -d "'")
    ;;
  $MODE)
    echo $(grep -E '^VITE_MODE=' $FILE | cut -d '=' -f 2 | tr -d "'")
    ;;
  *)
    invalid_argument
    ;;
  esac
}

main "$@"