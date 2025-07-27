import os
import json
from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag
def vite_asset(entrypoint, asset_type="js"):
    """
    Usage:
        {% vite_asset 'src/main.jsx' %}            → JS file path
        {% vite_asset 'src/main.jsx' 'css' %}      → First CSS file path
    Will return something like:
        /static/react/assets/main-[hash].js
        /static/react/assets/main-[hash].css
    """
    manifest_path = os.path.join(
        settings.BASE_DIR,
        'core', 'static', 'react',
        'manifest.json'
    )
    with open(manifest_path, 'r') as f:
        manifest = json.load(f)

    if entrypoint not in manifest:
        raise Exception(f"Could not find `{entrypoint}` in manifest.")

    entry = manifest[entrypoint]

    if asset_type == "js":
        return f"/static/react/{entry['file']}"
    elif asset_type == "css":
        try:
            return f"/static/react/{entry['css'][0]}"
        except (KeyError, IndexError):
            raise Exception(f"No CSS file found for `{entrypoint}` in manifest.")
    else:
        raise ValueError("Invalid asset_type. Use 'js' or 'css'.")
