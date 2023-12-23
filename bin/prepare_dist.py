#!/usr/bin/env python3


import shutil
import sys


def main():
    shutil.copytree('public', 'dist', dirs_exist_ok=True)


if __name__ == '__main__':
    sys.exit(main())
